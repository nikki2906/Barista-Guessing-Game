import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../assets/drinks.json";

const BaristaForm = () => {
    // handle all of the controlled inputs for our four basic ingredient categories
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    })

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    // what drink we have currently
    const [currentDrink, setCurrentDrink] = useState('');
    // what the true recipe is behind a drink
    const [trueRecipe, setTrueRecipe] = useState('');
    // state variables to represent whether we have a correct ingredient
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    // get a random drink using math
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        // set the currentDrink state variable to the name at the random index of the drinks list in our drinksJson
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        // set the trueRecipe state variable to the ingredients associated with that drink at the random index of the drinks list in our drinksJson.
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)
    }

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }

        if (trueRecipe.milk != inputs["milk"]){
            setCheckedMilk("wrong");
        }
        else {
            setCheckedMilk("correct");
        }

        if (trueRecipe.syrup != inputs["syrup"]){
            setCheckedSyrup("wrong");
        }   
        else {
            setCheckedSyrup("correct");
        }

        if (trueRecipe.blended != inputs["blended"]){
            setCheckedBlended("wrong");
        }
        else {
            setCheckedBlended("correct");
        }

    }

    // when request a new drink, clear out the current values
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
        getNextDrink();
        // set each state variable to empty strings
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

    }


    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button 
                    type="new-drink-button" 
                    className="button newdrink" 
                    onClick={onNewDrink}>
                    🔄
                </button>
            </div>
            <form className="container">
                <div className="mini-container">
                    <h3>Tempurature</h3>
                    <div className="answer-space" id={correct_temp}> {inputs["temperature"]} </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup}> {inputs["syrup"]}</div>
                    <RecipeChoices 
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>
                
                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}> {inputs["milk"]} </div>
                    <RecipeChoices 
                        handleChange = {(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}> {inputs["blended"]}</div>
                    <RecipeChoices
                        handleChange = {(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>

            </form>
            <div className="button-container">
                <button 
                    type="submit"
                    className="button submit" 
                    onClick={onCheckAnswer}>
                        Check Answer
                </button>
                    <br />
                <button 
                    type="new-drink-button" 
                    className="button submit" 
                    onClick={onNewDrink}>
                        New Drink
                </button>
            </div>
            
        </div>
    );
};

export default BaristaForm;
