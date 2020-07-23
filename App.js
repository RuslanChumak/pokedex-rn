import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Container, Drawer, Item, Input, Text } from 'native-base';
import Nav from './src/components/Nav'
import PokemonsList from './src/components/PokemonsList'
import SideBar from './src/components/SideBar'

export default class App extends Component {
  
  state = {
    isLoaded:  false,
    allPokemons: [],
    items: [],
    filteredItems: [],
    itemsForSearch: [],
    type: 'none',
    types: [],
    searchValue: '',
    controller: new AbortController(),
    page : 1,
    limit: '10',
    totalPages: 0
  }
  itemsOnPage = () =>{
    const {page, limit, filteredItems} = this.state
    this.setState({
      items: filteredItems.slice((page - 1) * limit, page * limit)
    })
  }
  getTypes = () =>{
    fetch('https://pokeapi.co/api/v2/type').then(res => res.json())
    .then(res =>{
      let types = res.results.map(item => item.name)
      types.unshift('none')
      this.setState({
        types: types
      })
    })
  }
  changeType = (type) =>{
    this.setState({
      type: type
    })
    if(type == 'none'){
      this.setState({
        itemsForSearch: this.state.allPokemons
      }, () => this.search(this.state.searchValue))
      
    }
    else{
      fetch(`https://pokeapi.co/api/v2/type/${type}`).then(res => res.json())
      .then(res =>{
        this.setState({
          itemsForSearch: res.pokemon.map(item => item.pokemon)
        }, () => this.search(this.state.searchValue))
      })
    }
  }
  search = (value) =>{
    
    let items = this.state.itemsForSearch.filter(item =>item.name.indexOf(value.toLowerCase()) === -1 ? false : true)

    this.setState({
      searchValue: value,
      filteredItems: items,
      totalPages: Math.ceil(items.length / this.state.limit)
    }, () =>this.changePage(1) )
      
  }
  closeDrawer(){
    this.drawer._root.close()
  };
  changePage = (value) =>{
    let page = this.state.page
    if(typeof value === 'boolean'){
      if(value)
        page += 1
      else page -= 1
    }
    else{
      page = value
    }
    this.setState({
      page: page
    }, this.itemsOnPage)
  }
  changeLimit = (value) =>{
    this.setState({
      limit: value,
      page: 1,
      totalPages: Math.ceil(this.state.filteredItems.length / value)
    }, this.itemsOnPage)
  }
  fetchData(){
    const {page, limit, controller} = this.state
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page -1 ) * limit}`, {signal: controller.signal})
    .then(res => res.json())
    .then(res => {
      this.setState({
        isLoaded: true,
        data: res,
        totalPages: Math.ceil(res.count / limit)
      }) 
    })
  }
  openDrawer = () =>{ this.drawer._root.open() };
 
  componentDidMount(){
    this.getTypes()
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0').then(res => res.json())
    .then(res =>{
      this.setState({
        allPokemons: res.results,
        itemsForSearch: res.results,
        isLoaded: true
      }, () =>this.search(this.state.searchValue))
    })
  }
  componentWillUnmount(){
    this.state.controller.abort()
  }
  render(){
    const {isLoaded, items, page, totalPages, limit, type, types, searchValue} = this.state
    return (
      <Container>
        <Drawer
          ref={(ref) => { this.drawer = ref; }} 
          onClose={() => this.closeDrawer()} 
          content={<SideBar 
                    limit = {limit}
                    changeLimit = {this.changeLimit}
                    type = {type}
                    changeType={this.changeType}
                    types={types}
                  />} 
          >
            <Container>
                <Nav 
                openDrawer={this.openDrawer} 
                changePage={this.changePage} 
                page={page} 
                totalPages = {totalPages} 
                />
                <ScrollView>
                  <Item>
                    <Input placeholder="Search..." value={searchValue} onChangeText={this.search}/>
                  </Item>
                  {isLoaded && (<PokemonsList data = {items}/>)}
                  {!isLoaded && (<Text>Loading...</Text>)}
                </ScrollView>
            </Container>
        </Drawer>
      </Container>
    );
  }
  
}

