import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {getChapter} from './Actions'
import greg from './gregtallit.jpg'

import Genesis from './Genesis'


function App(props) {


  return (
    <div className="App">
      <header>
    <div id="title-subtitle">
        <h1>חקר : Bible App</h1>
        <h3>Search, Study, Meditate</h3>
    </div>
</header>
<nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bible'>Read</Link></li>
    </ul>
</nav>
<Route exact path='/'>
<section id="about">
    <p>Welcome to <b>Chaqar</b>: a Bible app for studying and more!  Here you can search the scriptures
    for particular words or phrases, and then once you've found what you're interested in, you can call up
    resources like word studies and commentaries to help you understand the scripture even better!  And then,
you can meditate on all this and write your prayerful thoughts down to be saved in the web app under your account.</p>
</section>
<section id="about-greg">
  <h2>Meet the Maker</h2>
  <div className="about-greg-box">
    <img className="gregpic" src={greg} alt="Greg the Maker"></img>
    <p>Hey! My name is <b>Greg Wilson</b>.  I was born in 1990 and grew up in a Christian home, and yet later, I had to make 
      my faith my own.  I also had to confess hidden sin into the light to begin that journey of finding truth and freedom.
      After I came out of some sin in high school, I was memorizing bible verses and on the right path.  Then came college: intellect.
      I had to test just far evidence can get us when seeking to know that we know the truth.  No matter what material I got my hands on,
      I found there to always be one more question casting shadows on the legitimacy of my faith.  No doubt, in hindsight I see there are 
      good sources of evidence for the legitimacy of the Bible and the Judeo-Christian faith.  It's just, it seems that kind of evidence
      is never a 100% type of deal.  So after tons of searching and praying in college, what did it for me was a personal experience I had
      in the bathroom of the library on March 30th, 2011.  It was like God came in so close with His presence and overwhelming fatherly LOVE for me.  I felt 
      like I could weep for an eternity, literally.  Afterwards, I felt like a newborn little baby - I don't know if this was the 'birth from above'
      talked of in scripture (born again), or just a confirmation of my identity in God, but afterwards my relationship with God was established,
      with no doubts.</p>
      <p>So when finishing college, as I was doing my daily scripture reading, I came to Matthew 5.  Here I read something that struck me - Matt. 5:17-19 --
        Jesus did not come to abolish the law but to fulfill it (or fill it up).  Why fill it up?  If you keep reading, Jesus says whoever keeps the least commandment
        from the law (Torah) will be called greatest in the kingdom of God!  So I discovered the joy of embracing the applicable commandments of the Law of God to my 
        life, most notably, with observing the 7th day as a complete special day of rest and celebration and focus on God - a reset amidst the busy paths of life.
        Soon after, with more study, I discovered Jesus was indeed Jewish - called a Rabbi, and that according to Romans 11 and Ephesians 2, Gentiles come near and are grafted
        into a Jewish olive tree - become part of the people of God.  Also Jeremiah says if the sun and the moon are there, Israel is still His people, loosely.
        So it's like coming into this family that has guarded this Torah (Law) for ages, instead of some new people with new ways, as some Christians assert.</p>
        <p>And so, because of all this, my experience finding God, and the precious truths that the scriptures reveal, it is my joy and desire to create this app 
          to promote the study of the word of God, and also be a place to facilitate you taking notes, and meditating and praying about the scripture.  So I hope you
          will find the One worth far more than gold or money or fame - Yahweh God, and His Jewish son Yeshua (Jesus).  God bless you! 
    </p>
  </div>
  <h2>Contact Greg</h2>
  <h4>Phone: 316-771-9721</h4>
  <h4><a href={`mailto:${'gjwilson7390@gmail.com'}`}>gjwilson7390@gmail.com</a></h4>
  <br></br><br></br><br></br><br></br>
</section>
</Route>

<Route path='/bible'>

    <div>
      <br></br><br></br><br></br>
      <h2>Books of the Bible</h2>

      <br></br><br></br><br></br><br></br>
      <h4>Torah</h4>

      <div className="bible-books-buttons">

      <button className="bible-book-button"><Link className="link" to='/genesis'><h5>Genesis</h5></Link></button>
      <button className="bible-book-button"><h5>Exodus</h5></button>
      <button className="bible-book-button"><h5>Leviticus</h5></button>
      <button className="bible-book-button"><h5>Numbers</h5></button>
      <button className="bible-book-button"><h5>Deuteronomy</h5></button>

      </div>

      <br></br><br></br><br></br><br></br>
      <h4>Prophets</h4>

      <div className="bible-books-buttons">

      <button className="bible-book-button"><h5>Joshua</h5></button>
      <button className="bible-book-button"><h5>Judges</h5></button>
      <button className="bible-book-button"><h5>1 Samuel</h5></button>
      <button className="bible-book-button"><h5>2 Samuel</h5></button>
      <button className="bible-book-button"><h5>1 Kings</h5></button>
      <button className="bible-book-button"><h5>2 Kings</h5></button>
      <button className="bible-book-button"><h5>Isaiah</h5></button>
      <button className="bible-book-button"><h5>Jeremiah</h5></button>
      <button className="bible-book-button"><h5>Ezekiel</h5></button>
      <button className="bible-book-button"><h5>Hosea</h5></button>
      <button className="bible-book-button"><h5>Joel</h5></button>
      <button className="bible-book-button"><h5>Amos</h5></button>
      <button className="bible-book-button"><h5>Obadiah</h5></button>
      <button className="bible-book-button"><h5>Jonah</h5></button>
      <button className="bible-book-button"><h5>Micah</h5></button>
      <button className="bible-book-button"><h5>Nahum</h5></button>
      <button className="bible-book-button"><h5>Habakkuk</h5></button>
      <button className="bible-book-button"><h5>Zephaniah</h5></button>
      <button className="bible-book-button"><h5>Haggai</h5></button>
      <button className="bible-book-button"><h5>Zechariah</h5></button>
      <button className="bible-book-button"><h5>Malachi</h5></button>

      </div>



      <br></br><br></br><br></br><br></br>
      <h4>Writings</h4>

      <div className="bible-books-buttons">

      <button className="bible-book-button"><h5>Psalms</h5></button>
      <button className="bible-book-button"><h5>Proverbs</h5></button>
      <button className="bible-book-button"><h5>Job</h5></button>
      <button className="bible-book-button"><h5>Song of Songs</h5></button>
      <button className="bible-book-button"><h5>Ruth</h5></button>
      <button className="bible-book-button"><h5>Lamentations</h5></button>
      <button className="bible-book-button"><h5>Ecclesiastes</h5></button>
      <button className="bible-book-button"><h5>Esther</h5></button>
      <button className="bible-book-button"><h5>Daniel</h5></button>
      <button className="bible-book-button"><h5>Ezra</h5></button>
      <button className="bible-book-button"><h5>1 Chronicles</h5></button>
      <button className="bible-book-button"><h5>2 Chronicles</h5></button>

      </div>

      <br></br><br></br><br></br><br></br>
      <h4>New Covenant</h4>

      <div className="bible-books-buttons">

      <button className="bible-book-button"><h5>Matthew</h5></button>
      <button className="bible-book-button"><h5>Mark</h5></button>
      <button className="bible-book-button"><h5>Luke</h5></button>
      <button className="bible-book-button"><h5>John</h5></button>
      <button className="bible-book-button"><h5>Acts</h5></button>
      <button className="bible-book-button"><h5>Romans</h5></button>
      <button className="bible-book-button"><h5>1 Corinthians</h5></button>
      <button className="bible-book-button"><h5>2 Corinthians</h5></button>
      <button className="bible-book-button"><h5>Galatians</h5></button>
      <button className="bible-book-button"><h5>Ephesians</h5></button>
      <button className="bible-book-button"><h5>Philippians</h5></button>
      <button className="bible-book-button"><h5>Colossians</h5></button>
      <button className="bible-book-button"><h5>1 Thessalonians</h5></button>
      <button className="bible-book-button"><h5>2 Thessalonians</h5></button>
      <button className="bible-book-button"><h5>1 Timothy</h5></button>
      <button className="bible-book-button"><h5>2 Timothy</h5></button>
      <button className="bible-book-button"><h5>Titus</h5></button>
      <button className="bible-book-button"><h5>Philemon</h5></button>
      <button className="bible-book-button"><h5>Hebrews</h5></button>
      <button className="bible-book-button"><h5>James</h5></button>
      <button className="bible-book-button"><h5>1 Peter</h5></button>
      <button className="bible-book-button"><h5>2 Peter</h5></button>
      <button className="bible-book-button"><h5>1 John</h5></button>
      <button className="bible-book-button"><h5>2 John</h5></button>
      <button className="bible-book-button"><h5>3 John</h5></button>
      <button className="bible-book-button"><h5>Jude</h5></button>
      <button className="bible-book-button"><h5>Revelation</h5></button>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      

    </div>

</Route>

{/* Bible Book Routes--------------------------------------- */}

<Route path='/genesis'>
      <Genesis /> 
</Route>


{/* Bible Chapter Routes--------------------------------------- */}

<Route path='/genesis1'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 1</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis2'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 2</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis3'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 3</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis4'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 4</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis5'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 5</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis6'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 6</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis7'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 7</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis8'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 8</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis9'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 9</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis10'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 10</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis11'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 11</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis12'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 12</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis13'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 13</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis14'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 14</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis15'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 15</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis16'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 16</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis17'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 17</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis18'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 18</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis19'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 19</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis20'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 20</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis21'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 21</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis22'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 22</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis23'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 23</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis24'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 24</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis25'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 25</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis26'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 26</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis27'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 27</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis28'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 28</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis29'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 29</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis30'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 30</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis31'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 31</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis32'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 32</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis33'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 33</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis34'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 34</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis35'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 35</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis36'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 36</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis37'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 37</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis38'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 38</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis39'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 39</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis40'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 40</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis41'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 41</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis42'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 42</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis43'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 43</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis44'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 44</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis45'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 45</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis46'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 46</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis47'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 47</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis48'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 48</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis49'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 49</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>

<Route path='/genesis50'>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis 50</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.chapter}} />
      <div>{props.error}</div>
    </div>
</Route>



    </div>
  );
}

const mapStateToProps = state => {

  return {
    chapter: state.chapter,
    error: state.error
  }

}

export default connect(mapStateToProps, {getChapter})(App)

// export default App
