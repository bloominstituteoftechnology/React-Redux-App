import React from 'react';
import DOMPurify from 'dompurify'
import './App.css';
import { Link, Route, useHistory } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {getChapter} from './Actions'
import greg from './gregtallit.jpg'

import Menus from './Components/Menus'

import Genesis from './Components/bible-books/Genesis'
import Exodus from './Components/bible-books/Exodus'
import Leviticus from './Components/bible-books/Leviticus'
import Numbers from './Components/bible-books/Numbers'
import Deuteronomy from './Components/bible-books/Deuteronomy'

import Login from './Components/Login'
import Register from './Components/Register'
import Commentary from './Components/Commentary';
import Dashboard from './Components/Dashboard';
import TheForum from './Components/TheForum'
import OthersCommentary from './Components/OthersCommentary';


function App(props) {

  const history = useHistory()

  const userId = localStorage.getItem("user_id")
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.clear('token');
    history.push('/')
  }


  const genesischapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50] 

  const exoduschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]

  const leviticuschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]

  const numberschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

  const deuteronomychapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]



  return (
    <div className="App">
      <header>
    <div id="title-subtitle">
        <h1>חקר : Bible App</h1>
        <h3>Search, Study, Meditate</h3>
    </div>
</header>
<Menus token={token}/>
{/* <nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bible'>Read</Link></li>
        {token === null ?
        <li><Link to='/login'>Login</Link></li>
        :
        <li><button onClick={logout}>Logout</button></li>
        }
    </ul>
</nav>
{token === null ? 
    null
    :
    <div id="loggedInMenu">
      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/profile'>My Profile</Link></li>
        <li><Link to='/forum'>The Forum</Link></li>
      </ul>
    </div>
    
} */}
<Route exact path='/'>
<section id="about">
    <p>Welcome to <b>Chaqar</b>: a Bible app for studying and more!  Here you will be able to search the scriptures
    for particular words or phrases, and then once you've found what you're interested in, you will be able to call up
    resources like word studies and commentaries to help you understand the scripture even better!  And then,
you can meditate on all this and write down your prayerful thoughts and commentary of Scripture to be saved under the corresponding chapter
you were reading in the web app under your account, saved for whenever you want to go back and see your thoughts on that chapter.
Also, you can see commentary on the same chapter from other users who are using the app, making <b>Chaqar</b> a cross between
bible study and social media.  To come later as well will be <b>The Forum</b> which will function like a Facebook type feed to see other people's
devotional thoughts, and where you will be able to comment on those thoughts.  You will also have a personal profile with profile pic and other
generic information, should you choose to share it. I pray you are blessed by this endeavor.</p>
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
      <button className="bible-book-button"><Link className="link" to='/exodus'><h5>Exodus</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/leviticus'><h5>Leviticus</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/numbers'><h5>Numbers</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/deuteronomy'><h5>Deuteronomy</h5></Link></button>

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

<Route path='/login'>
    <Login />
</Route>

<Route path='/register'>
    <Register />
</Route>

<Route path='/dashboard'>
    <Dashboard />
</Route>

<Route path='/theforum'>
    <TheForum />
</Route>

{/* Bible Book Routes--------------------------------------- */}

<Route path='/genesis'>
      <Genesis /> 
</Route>

<Route path='/exodus'>
      <Exodus /> 
</Route>

<Route path='/leviticus'>
      <Leviticus /> 
</Route>

<Route path='/numbers'>
      <Numbers /> 
</Route>

<Route path='/deuteronomy'>
      <Deuteronomy /> 
</Route>



{/* Bible Chapter Routes--------------------------------------- */}

{genesischapters.map(chapter =>

<Route path={`/genesis${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Genesis {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='genesis' chapter={chapter} apibook='gen' />
      <OthersCommentary book='genesis' chapter={chapter} />
    </div>
</Route>

)}

{exoduschapters.map(chapter =>

<Route path={`/exodus${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Exodus {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='exodus' chapter={chapter} apibook='exo' />
      <OthersCommentary book='exodus' chapter={chapter} />
    </div>
</Route>

)}

{leviticuschapters.map(chapter =>

<Route path={`/leviticus${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Leviticus {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='leviticus' chapter={chapter} apibook='lev' />
      <OthersCommentary book='leviticus' chapter={chapter} />
    </div>
</Route>

)}

{numberschapters.map(chapter =>

<Route path={`/numbers${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Numbers {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='numbers' chapter={chapter} apibook='num' />
      <OthersCommentary book='numbers' chapter={chapter} />
    </div>
</Route>

)}

{deuteronomychapters.map(chapter =>

<Route path={`/deuteronomy${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Deuteronomy {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='deuteronomy' chapter={chapter} />
      <OthersCommentary book='deuteronomy' chapter={chapter} apibook='deu' />
    </div>
</Route>

)}

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
