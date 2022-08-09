import React, {useState} from 'react';
import Tips from '../Tips/Tips';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header'
import './App.css';

const name = require('@rstacruz/startup-name-generator')


const App = () => {

    const [headerText, setHeaderText] = useState('Name it!')
    const [headerExpanded, setHeaderExpanded] = useState(true)
    const [suggestedNames, setSuggestedNames] = useState([])
    const [tipsText, setTipsText] = useState(["TIP: Input a letter or word to get new domain name ideas & Click on your choicest for confirmation on it's availability."])

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText)
       setSuggestedNames(inputText ? name(inputText) : [])
    }


    return (
        <div>
            <Header headTitle={headerText} 
            headerExpanded={headerExpanded} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
            <Tips tipsText={tipsText} />
        </div>
    )
}

// class App extends React.Component {

//     state = {
//         headerText: "Name It!",
//         headerExpanded: true,
//         suggestedNames: []
//     };

//     handleInputChange = (inputText) => {
//         this.setState({headerExpanded: !(inputText.length > 0), suggestedNames: inputText ? name(inputText) : [],
//         });
//     }

//     render () {
//         // console.log(name("cloud"))
//         return (
//             <div>
//                 <Header headTitle={this.state.headerText} 
//                 headerExpanded={this.state.headerExpanded} />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultsContainer suggestedNames={this.state.suggestedNames} />
//             </div>
//         )
//     }
// }


export default App
