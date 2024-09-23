import React from 'react'
import SideBar from '../components/SideBar'
import List from '../components/List'
import { useState } from 'react'
import recipes from "../data/recipes.json"
import AddForm from '../components/AddForm'


function DashboardPage(props) {
  const { recipesNuestro, setRecipesNuestro, handleDelete, addNewRecipe, addEditedRecipe } = props;
  
  return (
    <div>
       
        
        <List
        recipesNuestro={recipesNuestro}
        handleDelete={handleDelete} 
        setRecipesNuestro = {setRecipesNuestro}
        addNewRecipe = {addNewRecipe}
        addEditedRecipe = {addEditedRecipe}
        />
        
    
        
    </div>
  )
}

export default DashboardPage  