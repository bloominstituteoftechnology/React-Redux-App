import React from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    getChapter

} from './Actions'


function Genesis (props) {

    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Genesis</h2>

            <div className="bible-chapters-buttons">

            <button onClick={() => {props.getChapter('gen', 1)}} className="bible-chapter-button"><Link className="link" to='/genesis1'><h5>1</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 2)}} className="bible-chapter-button"><Link className="link" to='/genesis2'><h5>2</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 3)}} className="bible-chapter-button"><Link className="link" to='/genesis3'><h5>3</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 4)}} className="bible-chapter-button"><Link className="link" to='/genesis4'><h5>4</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 5)}} className="bible-chapter-button"><Link className="link" to='/genesis5'><h5>5</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 6)}} className="bible-chapter-button"><Link className="link" to='/genesis6'><h5>6</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 7)}} className="bible-chapter-button"><Link className="link" to='/genesis7'><h5>7</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 8)}} className="bible-chapter-button"><Link className="link" to='/genesis8'><h5>8</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 9)}} className="bible-chapter-button"><Link className="link" to='/genesis9'><h5>9</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 10)}} className="bible-chapter-button"><Link className="link" to='/genesis10'><h5>10</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 11)}} className="bible-chapter-button"><Link className="link" to='/genesis11'><h5>11</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 12)}} className="bible-chapter-button"><Link className="link" to='/genesis12'><h5>12</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 13)}} className="bible-chapter-button"><Link className="link" to='/genesis13'><h5>13</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 14)}} className="bible-chapter-button"><Link className="link" to='/genesis14'><h5>14</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 15)}} className="bible-chapter-button"><Link className="link" to='/genesis15'><h5>15</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 16)}} className="bible-chapter-button"><Link className="link" to='/genesis16'><h5>16</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 17)}} className="bible-chapter-button"><Link className="link" to='/genesis17'><h5>17</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 18)}} className="bible-chapter-button"><Link className="link" to='/genesis18'><h5>18</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 19)}} className="bible-chapter-button"><Link className="link" to='/genesis19'><h5>19</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 20)}} className="bible-chapter-button"><Link className="link" to='/genesis20'><h5>20</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 21)}} className="bible-chapter-button"><Link className="link" to='/genesis21'><h5>21</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 22)}} className="bible-chapter-button"><Link className="link" to='/genesis22'><h5>22</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 23)}} className="bible-chapter-button"><Link className="link" to='/genesis23'><h5>23</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 24)}} className="bible-chapter-button"><Link className="link" to='/genesis24'><h5>24</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 25)}} className="bible-chapter-button"><Link className="link" to='/genesis25'><h5>25</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 26)}} className="bible-chapter-button"><Link className="link" to='/genesis26'><h5>26</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 27)}} className="bible-chapter-button"><Link className="link" to='/genesis27'><h5>27</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 28)}} className="bible-chapter-button"><Link className="link" to='/genesis28'><h5>28</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 29)}} className="bible-chapter-button"><Link className="link" to='/genesis29'><h5>29</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 30)}} className="bible-chapter-button"><Link className="link" to='/genesis30'><h5>30</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 31)}} className="bible-chapter-button"><Link className="link" to='/genesis31'><h5>31</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 32)}} className="bible-chapter-button"><Link className="link" to='/genesis32'><h5>32</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 33)}} className="bible-chapter-button"><Link className="link" to='/genesis33'><h5>33</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 34)}} className="bible-chapter-button"><Link className="link" to='/genesis34'><h5>34</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 35)}} className="bible-chapter-button"><Link className="link" to='/genesis35'><h5>35</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 36)}} className="bible-chapter-button"><Link className="link" to='/genesis36'><h5>36</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 37)}} className="bible-chapter-button"><Link className="link" to='/genesis37'><h5>37</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 38)}} className="bible-chapter-button"><Link className="link" to='/genesis38'><h5>38</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 39)}} className="bible-chapter-button"><Link className="link" to='/genesis39'><h5>39</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 40)}} className="bible-chapter-button"><Link className="link" to='/genesis40'><h5>40</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 41)}} className="bible-chapter-button"><Link className="link" to='/genesis41'><h5>41</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 42)}} className="bible-chapter-button"><Link className="link" to='/genesis42'><h5>42</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 43)}} className="bible-chapter-button"><Link className="link" to='/genesis43'><h5>43</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 44)}} className="bible-chapter-button"><Link className="link" to='/genesis44'><h5>44</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 45)}} className="bible-chapter-button"><Link className="link" to='/genesis45'><h5>45</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 46)}} className="bible-chapter-button"><Link className="link" to='/genesis46'><h5>46</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 47)}} className="bible-chapter-button"><Link className="link" to='/genesis47'><h5>47</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 48)}} className="bible-chapter-button"><Link className="link" to='/genesis48'><h5>48</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 49)}} className="bible-chapter-button"><Link className="link" to='/genesis49'><h5>49</h5></Link></button>
            <button onClick={() => {props.getChapter('gen', 50)}} className="bible-chapter-button"><Link className="link" to='/genesis50'><h5>50</h5></Link></button>

            </div>

        </div>

    )

}




const mapStateToProps = state => {

    return {
      chapter: state.chapter,
      error: state.error
    }
  
  }
  
  export default connect(mapStateToProps, {getChapter})(Genesis)