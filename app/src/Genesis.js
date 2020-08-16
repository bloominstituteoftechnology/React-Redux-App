import React from 'react'
import { Link, Route } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    getGenesis1,
    getGenesis2

} from './Actions'


function Genesis (props) {

    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Genesis</h2>

            <div className="bible-chapters-buttons">

            <button onClick={() => {props.getGenesis1()}} className="bible-chapter-button"><Link className="link" to='/genesis1'><h5>1</h5></Link></button>
            <button onClick={() => {props.getGenesis2()}} className="bible-chapter-button"><Link className="link" to='/genesis2'><h5>2</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/3'><h5>3</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/4'><h5>4</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/5'><h5>5</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/6'><h5>6</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/7'><h5>7</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/8'><h5>8</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/9'><h5>9</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/10'><h5>10</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/11'><h5>11</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/12'><h5>12</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/13'><h5>13</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/14'><h5>14</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/15'><h5>15</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/16'><h5>16</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/17'><h5>17</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/18'><h5>18</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/19'><h5>19</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/20'><h5>20</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/21'><h5>21</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/22'><h5>22</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/23'><h5>23</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/24'><h5>24</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/25'><h5>25</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/26'><h5>26</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/27'><h5>27</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/28'><h5>28</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/29'><h5>29</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/30'><h5>30</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/31'><h5>31</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/32'><h5>32</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/33'><h5>33</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/34'><h5>34</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/35'><h5>35</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/36'><h5>36</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/37'><h5>37</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/38'><h5>38</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/39'><h5>39</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/40'><h5>40</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/41'><h5>41</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/42'><h5>42</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/43'><h5>43</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/44'><h5>44</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/45'><h5>45</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/46'><h5>46</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/47'><h5>47</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/48'><h5>48</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/49'><h5>49</h5></Link></button>
            <button className="bible-chapter-button"><Link className="link" to='/50'><h5>50</h5></Link></button>

            </div>

            


        </div>
    )
}


const mapStateToProps = state => {

    return {
      genesis1: state.genesis1,
      genesis2: state.genesis2,
      error: state.error
    }
  
  }
  
  export default connect(mapStateToProps, {getGenesis1, getGenesis2})(Genesis)