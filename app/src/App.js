import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify'
import './App.css';
import { Link, Route, useHistory } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {getChapter} from './Actions'
import greg from './gregtallit.jpg'
import social from './social.jpg'
import study from './study.jpg'

import Menus from './Components/Menus'

import Genesis from './Components/bible-books/Genesis'
import Exodus from './Components/bible-books/Exodus'
import Leviticus from './Components/bible-books/Leviticus'
import Numbers from './Components/bible-books/Numbers'
import Deuteronomy from './Components/bible-books/Deuteronomy'
import Joshua from './Components/bible-books/Joshua'
import Judges from './Components/bible-books/Judges'
import FirstSamuel from './Components/bible-books/1Samuel'
import SecondSamuel from './Components/bible-books/2Samuel'
import FirstKings from './Components/bible-books/1Kings'
import SecondKings from './Components/bible-books/2Kings'
import Isaiah from './Components/bible-books/Isaiah'
import Jeremiah from './Components/bible-books/Jeremiah'
import Ezekiel from './Components/bible-books/Ezekiel'

import Lamentations from './Components/bible-books/Lamentations';
import Ecclesiastes from './Components/bible-books/Ecclesiastes';
import Esther from './Components/bible-books/Esther';
import Daniel from './Components/bible-books/Daniel';


import Matthew from './Components/bible-books/Matthew'
import Mark from './Components/bible-books/Mark'
import Luke from './Components/bible-books/Luke'
import John from './Components/bible-books/John'
import Acts from './Components/bible-books/Acts';

import Login from './Components/Login'
import Register from './Components/Register'
import Music from './Components/Music'
import Commentary from './Components/Commentary';
import Dashboard from './Components/Dashboard';
import Users from './Components/Users'
import Wall from './Components/Wall'
import TheForum from './Components/TheForum'
import OthersCommentary from './Components/OthersCommentary';
import DiscussionRoom from './Components/DiscussionRoom';
import MyProfile from './Components/MyProfile';
import Videos from './Components/Videos';

import { axiosWithAuth } from './axiosWithAuth';



function App(props) {

  const [users, setUsers] = useState([])

  const [musicDisplayed, setMusicDisplayed] = useState(false)

  const [inSpanish, setInSpanish] = useState(false)

  useEffect( () => {

    axiosWithAuth()
        .get('https://chaqar-data.herokuapp.com/api/auth')
        .then(res => {
            setUsers(res.data)
        })

}, [])



  const history = useHistory()

  const userId = localStorage.getItem("user_id")
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.clear('token');
    history.push('/')
  }


  const chaptersofbooks = [
        {book: 'Genesis', apibook: 'gen', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]  },
        {book: 'Exodus', apibook: 'exo', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]},
        {book: 'Leviticus', apibook: 'lev', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]},
        {book: 'Numbers', apibook: 'num', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]},
        {book: 'Deuteronomy', apibook: 'deu', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},
        {book: 'Joshua', apibook: 'jos', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]},
        {book: 'Judges', apibook: 'jdg', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]},
        {book: '1 Samuel', apibook: '1sa', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
        {book: '2 Samuel', apibook: '2sa', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]},
        {book: '1 Kings', apibook: '1ki', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},
        {book: '2 Kings', apibook: '2ki', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},
        {book: 'Isaiah', apibook: 'isa', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66]},
        {book: 'Jeremiah', apibook: 'jer', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]},
        {book: 'Ezekiel', apibook: 'ezk', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]},
        {book: 'Hosea', apibook: 'hos', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
        {book: 'Joel', apibook: 'joe', chapters: [1,2,3]},
        {book: 'Amos', apibook: 'amo', chapters: [1,2,3,4,5,6,7,8,9]},
        {book: 'Obadiah', apibook: 'obd', chapters: [1]},
        {book: 'Jonah', apibook: 'jon', chapters: [1,2,3,4]},
        {book: 'Micah', apibook: 'mic', chapters: [1,2,3,4,5,6,7]},
        {book: 'Nahum', apibook: 'nah', chapters: [1,2,3]},
        {book: 'Habakkuk', apibook: 'hab', chapters: [1,2,3]},
        {book: 'Zephaniah', apibook: 'zep', chapters: [1,2,3]},
        {book: 'Haggai', apibook: 'hag', chapters: [1,2]},
        {book: 'Zechariah', apibook: 'zec', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
        {book: 'Malachi', apibook: 'mal', chapters: [1,2,3,4]},
        {book: 'Psalms', apibook: 'psa', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150]},
        {book: 'Proverbs', apibook: 'pro', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
        {book: 'Job', apibook: 'job', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]},
        {book: 'Song of Songs', apibook: 'son', chapters: [1,2,3,4,5,6,7,8]},
        {book: 'Ruth', apibook: 'rut', chapters: [1,2,3,4]},
        {book: 'Lamentations', apibook: 'lam', chapters: [1,2,3,4,5]},
        {book: 'Ecclesiastes', apibook: 'ecc', chapters: [1,2,3,4,5,6,7,8,9,10,11,12]},
        {book: 'Esther', apibook: 'est', chapters: [1,2,3,4,5,6,7,8,9,10]},
        {book: 'Daniel', apibook: 'dan', chapters: [1,2,3,4,5,6,7,8,9,10,11,12]},
        {book: 'Ezra', apibook: 'ezr', chapters: [1,2,3,4,5,6,7,8,9,10]},
        {book: 'Nehemiah', apibook: 'neh', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13]},
        {book: '1 Chronicles', apibook: '1cr', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]},
        {book: '2 Chronicles', apibook: '2cr', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]},
        {book: 'Matthew', apibook: 'mat', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},
        {book: 'Mark', apibook: 'mar', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
        {book: 'Luke', apibook: 'luk', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]},
        {book: 'John', apibook: 'jhn', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]},
        {book: 'Acts', apibook: 'act', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},
        {book: 'Romans', apibook: 'rom', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
        {book: '1 Corinthians', apibook: '1co', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
        {book: '2 Corinthians', apibook: '2co', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13]},
        {book: 'Galatians', apibook: 'gal', chapters: [1,2,3,4,5,6]},
        {book: 'Ephesians', apibook: 'eph', chapters: [1,2,3,4,5,6]},
        {book: 'Philippians', apibook: 'phi', chapters: [1,2,3,4]},
        {book: 'Colossians', apibook: 'col', chapters: [1,2,3,4]},
        {book: '1 Thessalonians', apibook: '1th', chapters: [1,2,3,4,5]},
        {book: '2 Thessalonians', apibook: '2th', chapters: [1,2,3]},
        {book: '1 Timothy', apibook: '1ti', chapters: [1,2,3,4,5,6]},
        {book: '2 Timothy', apibook: '2ti', chapters: [1,2,3,4]},
        {book: 'Titus', apibook: 'tit', chapters: [1,2,3]},
        {book: 'Philemon', apibook: 'phl', chapters: [1]},
        {book: 'Hebrews', apibook: 'heb', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13]},
        {book: 'James', apibook: 'jam', chapters: [1,2,3,4,5]},
        {book: '1 Peter', apibook: '1pe', chapters: [1,2,3,4,5]},
        {book: '2 Peter', apibook: '2pe', chapters: [1,2,3]},
        {book: '1 John', apibook: '1jo', chapters: [1,2,3,4,5]},
        {book: '2 John', apibook: '2jo', chapters: [1]},
        {book: '3 John', apibook: '3jo', chapters: [1]},
        {book: 'Jude', apibook: 'jud', chapters: [1]},
        {book: 'Revelation', apibook: 'rev', chapters: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},
  ]



  return (
    <div className="App">
      <header>
    
      {inSpanish ?
        <div id="title-subtitle">
        <h1>חקר : App de la Biblia</h1>
        <h3 id="motto">Buscar, Estudiar, Discutir</h3>
        <button onClick={() => setInSpanish(false)} class="brownroundbutton3" style={{marginBottom: 40 + 'px', border: 0 + 'px', cursor: 'pointer'}}>English</button>
        </div>
        :
        <div>
        <h1>חקר : Bible App</h1>
        <h3 id="motto">Search, Study, Discuss</h3>
        <button onClick={() => setInSpanish(true)} class="brownroundbutton3" style={{marginBottom: 40 + 'px', border: 0 + 'px', cursor: 'pointer'}}>Español</button>      
        </div>
      }
</header>
<Menus token={token}/>
{musicDisplayed ? 
<Music setMusicDisplayed={setMusicDisplayed} />
: null
}
<Route exact path='/'>
<section id="about">
<p class="mediumtext">Welcome to <b>Chaqar</b>: a Bible app for studying and fellowship!</p>  
<p class="mediumtext">Want to study the Bible in a fresh, fun, and <b>new</b> way?</p>
<img class="publicitypics" src={study}></img>
<br></br><br></br>
<p class="mediumtext">And do it with friends?</p>
<img class="publicitypics" src={social}></img>
<p class="mediumtext">Then start using Chaqar today - the cross between Bible study and social media.  You can save your own commentary on Bible chapters, see what others are saying about the same chapter, as well as start topical conversations in The Forum and more!</p>
<div class="brownroundbutton2"><Link className="link" to='/register'><h2>Sign Up!</h2></Link></div>
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

      {chaptersofbooks.slice(0,5).map(bookandchapters => (

            <button className="bible-book-button"><Link className="link" to={`/${bookandchapters.apibook}`}><h5>{bookandchapters.book}</h5></Link></button>  

      ))}

      </div>

      <br></br><br></br><br></br><br></br>
      <h4>Prophets</h4>

      <div className="bible-books-buttons">

      {chaptersofbooks.slice(5,26).map(bookandchapters => (

      <button className="bible-book-button"><Link className="link" to={`/${bookandchapters.apibook}`}><h5>{bookandchapters.book}</h5></Link></button>  

      ))}

      </div>

      <br></br><br></br><br></br><br></br>
      <h4>Writings</h4>

      <div className="bible-books-buttons">

      {chaptersofbooks.slice(26,39).map(bookandchapters => (

      <button className="bible-book-button"><Link className="link" to={`/${bookandchapters.apibook}`}><h5>{bookandchapters.book}</h5></Link></button>  

      ))}

      </div>

      <br></br><br></br><br></br><br></br>
      <h4>New Covenant</h4>

      <div className="bible-books-buttons">

      {chaptersofbooks.slice(38,66).map(bookandchapters => (

      <button className="bible-book-button"><Link className="link" to={`/${bookandchapters.apibook}`}><h5>{bookandchapters.book}</h5></Link></button>  

      ))}

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
    <Dashboard setMusicDisplayed={setMusicDisplayed}/>
</Route>

<Route path='/users'>
    <Users />
</Route>


{users.map(user => 

  <Route path={`/${user.first_name}${user.last_name}`}>
    <Wall user={user} />
  </Route>

)}

<Route path='/profile'>
    <MyProfile />
</Route>

<Route path='/theforum'>
    <TheForum />
</Route>

<Route path='/videos'>
      <Videos />
</Route>

<Route path='/torahapplications'>
    <DiscussionRoom 
        title="Torah Applications" 
        titleid="torahappications-title" 
        subtitleid="torahapplications-subtitle"
        bg="torahapplications-bg"
        discussionroom="torahapplications" />
</Route>

<Route path='/feasts'>
    <DiscussionRoom 
        title="Celebrating the Feasts of Yahweh"
        titleid="feasts-title" 
        subtitleid="feasts-subtitle"
        bg="feasts-bg"
        discussionroom="feasts" />
</Route>

<Route path='/historicalbooks'>
    <DiscussionRoom 
        title="The Historical Bible Books" 
        titleid="historicalbooks-title" 
        subtitleid="historicalbooks-subtitle"
        bg="historicalbooks-bg"
        discussionroom="historicalbooks" />
</Route>

<Route path='/ketuvim'>
    <DiscussionRoom 
        title="Ketuvim: The Writings"
        titleid="ketuvim-title" 
        subtitleid="ketuvim-subtitle"
        bg="ketuvim-bg"
        discussionroom="ketuvim" />
</Route>

<Route path='/messianicprophecy'>
    <DiscussionRoom 
        title="Messianic Prophecy"
        titleid="messianicprophecy-title" 
        subtitleid="messianicprophecy-subtitle"
        bg="messianicprophecy-bg"
        discussionroom="messianicprophecy" />
</Route>

<Route path='/followingyeshua'>
    <DiscussionRoom 
        title="Following Yeshua"
        titleid="followingyeshua-title" 
        subtitleid="followingyeshua-subtitle"
        bg="followingyeshua-bg"
        discussionroom="followingyeshua" />
</Route>

<Route path='/gospel'>
    <DiscussionRoom 
        title="What is the Gospel?"
        titleid="gospel-title" 
        subtitleid="gospel-subtitle"
        bg="gospel-bg"
        discussionroom="gospel" />
</Route>

<Route path='/allthingspaul'>
    <DiscussionRoom 
        title="All Things Paul"
        titleid="allthingspaul-title" 
        subtitleid="allthingspaul-subtitle"
        bg="allthingspaul-bg"
        discussionroom="allthingspaul" />
</Route>

<Route path='/israel'>
    <DiscussionRoom 
        title="Israel"
        titleid="israel-title" 
        subtitleid="israel-subtitle"
        bg="israel-bg" 
        discussionroom="israel" />
</Route>

<Route path='/endtimesprophecy'>
    <DiscussionRoom 
        title="End Times Prophecy"
        titleid="endtimesprophecy-title" 
        subtitleid="endtimesprophecy-subtitle"
        bg="endtimesprophecy-bg"
        discussionroom="endtimesprophecy" />
</Route>

<Route path='/thelifetocome'>
    <DiscussionRoom 
        title="The Life To Come"
        titleid="thelifetocome-title" 
        subtitleid="thelifetocome-subtitle"
        bg="thelifetocome-bg"
        discussionroom="thelifetocome" />
</Route>

<Route path='/prayerroom'>
    <DiscussionRoom 
        title="Prayer Room"
        titleid="prayerroom-title" 
        subtitleid="prayerroom-subtitle"
        bg="prayerroom-bg"
        discussionroom="prayerroom" />
</Route>


{/* -------------Creating all the book pages: ------------------*/}

{chaptersofbooks.map(outerElement => 
            
            <Route path={`/${outerElement.apibook}`} key={outerElement.book}>
                  <div>
                        <br></br><br></br><br></br>
                        <h2>{outerElement.book}</h2>

                              <div className="bible-chapters-buttons">

                              {outerElement.chapters.map(chapter => ( 
                                    <button onClick={() => {props.getChapter(`${outerElement.apibook}`, `${chapter}`)}} className="bible-chapter-button"><Link className="link" to={`${outerElement.apibook}${chapter}`}>
                                          
                                          <h5>{chapter}</h5>
                                          
                                          </Link>
                                    </button>
                              ))}
                              
                              </div>
                        </div>
            </Route>
)}


{/* -------------Creating all the chapter pages: ------------------*/}

{chaptersofbooks.map(outerElement => {
     
      return outerElement.chapters.map(chapter => 

            <Route path={`/${outerElement.apibook}${chapter}`} key={`${outerElement.apibook}${chapter}`}>
                  <div>
                        <br></br><br></br><br></br>
                        <h2>{outerElement.book} {chapter}</h2>
                        <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
                        <div>{props.error}</div>
                        <Commentary book={outerElement.book} chapter={chapter} />
                        <OthersCommentary book={outerElement.book} chapter={chapter} apibook={outerElement.apibook} />
                  </div>
            </Route>
      )                          
})}

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
