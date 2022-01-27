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


  const genesischapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50] 
  const exoduschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
  const leviticuschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
  const numberschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
  const deuteronomychapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
  
  const joshuachapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const judgeschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  const firstsamuelchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  const secondsamuelchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const firstkingschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
  const secondkingschapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  const isaiahchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66]
  const jeremiahchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
  const ezekielchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]
  
  const matthewchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
  const markchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  const lukechapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const johnchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]



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

      <button className="bible-book-button"><Link className="link" to='/genesis'><h5>Genesis</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/exodus'><h5>Exodus</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/leviticus'><h5>Leviticus</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/numbers'><h5>Numbers</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/deuteronomy'><h5>Deuteronomy</h5></Link></button>

      </div>

      <br></br><br></br><br></br><br></br>
      <h4>Prophets</h4>

      <div className="bible-books-buttons">

      <button className="bible-book-button"><Link className="link" to='/joshua'><h5>Joshua</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/judges'><h5>Judges</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/1samuel'><h5>1 Samuel</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/2samuel'><h5>2 Samuel</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/1kings'><h5>1 Kings</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/2kings'><h5>2 Kings</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/isaiah'><h5>Isaiah</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/jeremiah'><h5>Jeremiah</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/ezekiel'><h5>Ezekiel</h5></Link></button>
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

      <button className="bible-book-button"><Link className="link" to='/matthew'><h5>Matthew</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/mark'><h5>Mark</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/luke'><h5>Luke</h5></Link></button>
      <button className="bible-book-button"><Link className="link" to='/john'><h5>John</h5></Link></button>
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
    <Dashboard setMusicDisplayed={setMusicDisplayed}/>
</Route>

<Route path='/users'>
    <Users />
</Route>

{console.log(users)}

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

<Route path='/joshua'>
      <Joshua /> 
</Route>

<Route path='/judges'>
      <Judges /> 
</Route>

<Route path='/1samuel'>
      <FirstSamuel /> 
</Route>
 
<Route path='/2samuel'>
      <SecondSamuel /> 
</Route>

<Route path='/1kings'>
      <FirstKings /> 
</Route>

<Route path='/2kings'>
      <SecondKings /> 
</Route>

<Route path='/isaiah'>
      <Isaiah isaiahchapters={isaiahchapters}/> 
</Route>

<Route path='/jeremiah'>
      <Jeremiah /> 
</Route>

<Route path='/ezekiel'>
      <Ezekiel /> 
</Route>
{/*
<Route path='/hosea'>
      <Hosea /> 
</Route>

<Route path='/joel'>
      <Joel /> 
</Route>

<Route path='/amos'>
      <Amos /> 
</Route>

<Route path='/obadiah'>
      <Obadiah /> 
</Route>

<Route path='/jonah'>
      <Jonah /> 
</Route>

<Route path='/micah'>
      <Micah /> 
</Route>

<Route path='/nahum'>
      <Nahum /> 
</Route>

<Route path='/habakkuk'>
      <Habakkuk /> 
</Route>

<Route path='/zephaniah'>
      <Zephaniah /> 
</Route>

<Route path='/haggai'>
      <Haggai /> 
</Route>

<Route path='/zechariah'>
      <Zechariah /> 
</Route>

<Route path='/malachi'>
      <Malachi /> 
</Route>

<Route path='/psalms'>
      <Psalms /> 
</Route>

<Route path='/proverbs'>
      <Proverbs /> 
</Route>

<Route path='/job'>
      <Job /> 
</Route>

<Route path='/songofsongs'>
      <SongOfSongs /> 
</Route>

<Route path='/ruth'>
      <Ruth /> 
</Route>

<Route path='/lamentations'>
      <Lamentations /> 
</Route>

<Route path='/ecclesiastes'>
      <Ecclesiastes /> 
</Route>

<Route path='/esther'>
      <Esther /> 
</Route>

<Route path='/daniel'>
      <Daniel /> 
</Route>

<Route path='/ezra'>
      <Ezra /> 
</Route>

<Route path='/1chronicles'>
      <FirstChronicles /> 
</Route>

<Route path='/2chronicles'>
      <SecondChronicles /> 
</Route> */}

<Route path='/matthew'>
      <Matthew /> 
</Route>

<Route path='/mark'>
      <Mark /> 
</Route>

<Route path='/luke'>
      <Luke /> 
</Route>

<Route path='/john'>
      <John /> 
</Route>

{/* <Route path='/acts'>
      <Acts /> 
</Route>

<Route path='/romans'>
      <Romans /> 
</Route>

<Route path='/1corinthians'>
      <FirstCorinthians /> 
</Route>

<Route path='/2corinthians'>
      <SecondCorinthians /> 
</Route>

<Route path='/galatians'>
      <Galatians /> 
</Route>

<Route path='/ephesians'>
      <Ephesians /> 
</Route>

<Route path='/philippians'>
      <Philippians /> 
</Route>

<Route path='/colossians'>
      <Colossians /> 
</Route>

<Route path='/1thessalonians'>
      <FirstThessalonians /> 
</Route>

<Route path='/2thessalonians'>
      <SecondThessalonians /> 
</Route>

<Route path='/1timothy'>
      <FirstTimothy /> 
</Route>

<Route path='/2timothy'>
      <SecondTimothy /> 
</Route>

<Route path='/titus'>
      <Titus/> 
</Route>

<Route path='/philemon'>
      <Philemon /> 
</Route>

<Route path='/hebrews'>
      <Hebrews /> 
</Route>

<Route path='/james'>
      <James /> 
</Route>

<Route path='/1peter'>
      <FirstPeter /> 
</Route>

<Route path='/2peter'>
      <SecondPeter /> 
</Route>

<Route path='/1john'>
      <FirstJohn /> 
</Route>

<Route path='/2john'>
      <SecondJohn /> 
</Route>

<Route path='/3john'>
      <ThirdJohn /> 
</Route>

<Route path='/revelation'>
      <Revelation /> 
</Route> */}





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

{joshuachapters.map(chapter =>

<Route path={`/joshua${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Joshua {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='joshua' chapter={chapter} />
      <OthersCommentary book='joshua' chapter={chapter} apibook='jos' />
    </div>
</Route>

)}

{judgeschapters.map(chapter =>

<Route path={`/judges${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Judges {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='judges' chapter={chapter} />
      <OthersCommentary book='judges' chapter={chapter} apibook='jdg' />
    </div>
</Route>

)}

{firstsamuelchapters.map(chapter =>

<Route path={`/1samuel${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>1 Samuel {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='1samuel' chapter={chapter} />
      <OthersCommentary book='1samuel' chapter={chapter} apibook='1sa' />
    </div>
</Route>

)}

{secondsamuelchapters.map(chapter =>

<Route path={`/2samuel${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>2 Samuel {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='2samuel' chapter={chapter} />
      <OthersCommentary book='2samuel' chapter={chapter} apibook='2sa' />
    </div>
</Route>

)}

{firstkingschapters.map(chapter =>

<Route path={`/1kings${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>1 Kings {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='1kings' chapter={chapter} />
      <OthersCommentary book='1kings' chapter={chapter} apibook='1ki' />
    </div>
</Route>

)}

{secondkingschapters.map(chapter =>

<Route path={`/2kings${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>2 Kings {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='2kings' chapter={chapter} />
      <OthersCommentary book='2kings' chapter={chapter} apibook='2ki' />
    </div>
</Route>

)}

{isaiahchapters.map(chapter =>

<Route path={`/isaiah${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Isaiah {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='isaiah' chapter={chapter} />
      <OthersCommentary book='isaiah' chapter={chapter} apibook='isa' />
    </div>
</Route>

)}

{jeremiahchapters.map(chapter =>

<Route path={`/jeremiah${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Jeremiah {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='jeremiah' chapter={chapter} />
      <OthersCommentary book='jeremiah' chapter={chapter} apibook='jer' />
    </div>
</Route>

)}

{ezekielchapters.map(chapter =>

<Route path={`/ezekiel${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Ezekiel {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='ezekiel' chapter={chapter} />
      <OthersCommentary book='ezekiel' chapter={chapter} apibook='ezk' />
    </div>
</Route>

)}





{matthewchapters.map(chapter =>

<Route path={`/matthew${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Matthew {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='matthew' chapter={chapter} />
      <OthersCommentary book='matthew' chapter={chapter} apibook='mat' />
    </div>
</Route>

)}

{markchapters.map(chapter =>

<Route path={`/mark${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Mark {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='mark' chapter={chapter} />
      <OthersCommentary book='mark' chapter={chapter} apibook='mar' />
    </div>
</Route>

)}

{lukechapters.map(chapter =>

<Route path={`/luke${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>Luke {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='luke' chapter={chapter} />
      <OthersCommentary book='luke' chapter={chapter} apibook='luk' />
    </div>
</Route>

)}

{johnchapters.map(chapter =>

<Route path={`/john${chapter}`} key={chapter}>
    <div>
      <br></br><br></br><br></br>
      <h2>John {chapter}</h2>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.chapter)}} />
      <div>{props.error}</div>
      <Commentary book='john' chapter={chapter} />
      <OthersCommentary book='john' chapter={chapter} apibook='joh' />
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
