(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=(n(6),n(1)),i=n(2),u=n(4),l=n(3),p=n(5);function h(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"header-plenty"},"PLENTY"),r.a.createElement("h1",{className:"header-of"},"OF"),r.a.createElement("img",{className:"header-img",src:"https://www.logolynx.com/images/logolynx/a4/a48597184b96ba3cb64ee133bcd52ad4.png",alt:"Rainbow Phish Logo"}))}var m=n(10),d=n.n(m),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).goPhishing=function(){var t=document.querySelector(".search-input").value.toLowerCase();e.props.updateCurrentDisplay(t),e.setState({suggestions:e.trie.suggest(t)})},e.trie=new d.a,e.state={suggestions:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.state.concertVenues||this.state.concertDates||this.setState({concertVenues:this.props.concertVenues,concertDates:this.props.concertDates}),!this.state.songs&&this.props.songs.length&&this.setState({songs:this.props.songs,trieData:this.trie.populate([].concat(this.state.concertVenues,this.state.concertDates,this.props.songs))})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("button",{className:"view-btn",onClick:function(t){return e.props.toggleShowAllConcerts(!0,t)}},"View All"),r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search for a Song, Venue, or Show Date",onChange:this.goPhishing,autoFocus:!0,list:"data-list"}),r.a.createElement("datalist",{id:"data-list"},this.state.suggestions.map(function(e){return r.a.createElement("option",{value:e})})),r.a.createElement("button",{className:"random-btn",onClick:function(t){return e.props.updateRandomConcertData(t)}},"Random Shows"))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).convertTime=function(e){var t=parseInt(e),n=Math.floor(t/36e5),a=Math.floor((t-36e5*n)/6e4),r=parseInt((t-36e5*n-6e4*a)/1e3);return r<10?"".concat(a,":0").concat(r):"".concat(a,":").concat(r)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"song-table-container"},r.a.createElement("section",{className:"venue-info-container"},r.a.createElement("i",{className:"fas fa-chevron-left",onClick:this.props.returnFromExtendedView}),r.a.createElement("section",{className:"venue-info"},r.a.createElement("h3",{className:"venue-date"},this.props.currentShow.date),r.a.createElement("h2",{className:"venue-name"},this.props.currentShow.venue.name),r.a.createElement("h3",{className:"venue-location"},this.props.currentShow.venue.location))),r.a.createElement("table",{className:"song-table"},r.a.createElement("tbody",null,this.props.setlist.map(function(t,n){return r.a.createElement("tr",{className:"song-table-row",key:n},r.a.createElement("td",{className:"song-table-position"},t.position),r.a.createElement("td",{className:"song-table-title",onClick:function(){return e.props.updateCurrentSongIndex(n)}},r.a.createElement("i",{className:"far fa-play-circle"}),t.title),r.a.createElement("td",{className:"song-table-duration"},e.convertTime(t.duration)))}))))}}]),t}(a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("article",{className:"concert",key:this.props.concert.id,onClick:function(){return e.props.goToExtendedView(e.props.concert.id)}},r.a.createElement("i",{className:"far fa-play-circle"}),r.a.createElement("img",{className:"concert-image",src:this.props.concert.venue.img,alt:"image of concert venue"}),r.a.createElement("div",{className:"concert-text-display"},r.a.createElement("p",{className:"concert-date"},this.props.concert.date),r.a.createElement("p",{className:"concert-venue"},this.props.concert.venue.name),r.a.createElement("p",{className:"concert-location"},this.props.concert.venue.location)))}}]),t}(a.Component),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).returnFromExtendedView=function(){e.setState({extendedView:!1})},e.goToExtendedView=function(t){e.setState({extendedView:!0}),e.props.toggleShowAllConcerts(),e.props.updateCurrentSetlist(t)},e.displayVenueSearch=function(){var t,n=e.props.currentSearch;return 0===(t=e.props.concertData.filter(function(e){return e.venue.name.toLowerCase().includes(n)||e.date.includes(n)||e.venue.location.toLowerCase().includes(n)})).length&&(t=e.songSearch(n)),t},e.songSearch=function(t){var n=[];return e.props.concertData.forEach(function(a){e.props.setlistData[a.id].forEach(function(e){e.title.toLowerCase().includes(t)&&n.push(a)})}),n},e.state={extendedView:!1},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=this.props.currentSearch,a=0;a<8;a++){var o=Math.floor(Math.random()*this.props.concertData.length);t.push(o)}if(!0===this.props.showAllConcerts&&""===n)return r.a.createElement("main",{className:"concert-display"},r.a.createElement("div",{className:"concert-grid"},this.props.concertData.map(function(t,n){return r.a.createElement(f,{concert:t,goToExtendedView:e.goToExtendedView,key:n})})));if(""===n&&!1===this.state.extendedView&&this.props.concertData.length>0)return r.a.createElement("main",{className:"concert-display"},r.a.createElement("div",{className:"concert-grid"},t.map(function(t,n){return r.a.createElement(f,{concert:e.props.concertData[t],goToExtendedView:e.goToExtendedView,key:n})})));if(!0===this.state.extendedView)return r.a.createElement("main",{className:"concert-display"},r.a.createElement(S,{setlist:this.props.currentSetlist,updateCurrentSongIndex:this.props.updateCurrentSongIndex,currentShow:this.props.currentShow,returnFromExtendedView:this.returnFromExtendedView}));var c=this.displayVenueSearch();return 0===c.length&&this.props.concertData.length>0?r.a.createElement("main",{className:"error-display"},r.a.createElement("h1",null,"Didn't catch anything on that one!")):r.a.createElement("main",{className:"concert-display"},r.a.createElement("div",{className:"concert-grid"},c.map(function(t,n){return r.a.createElement(f,{concert:t,goToExtendedView:e.goToExtendedView,key:n})})))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).togglePlay=function(){var t=document.querySelector(".audio-clip"),n=document.querySelector(".play-pause");!0===t.paused&&""!==e.props.currentSetlist[e.props.currentSong].mp3?(t.play(),n.innerHTML='<i class="fas fa-pause"></i>'):(t.pause(),n.innerHTML='<i class="fas fa-play">')},e.updateSeekBar=function(t){var n=document.querySelector(".audio-clip"),a=t.target,r=document.querySelector(".play-pause"),o=100/n.duration*n.currentTime;100===o&&e.props.currentSong<e.props.currentSetlist.length-1?(e.props.goToNextSong(1),e.checkForNewSong()):100===o&&e.props.currentSong===e.props.currentSetlist.length-1?r.innerHTML='<i class="fas fa-play"></i>':a.value=o,document.querySelector(".current-time").innerHTML=e.convertTime(1e3*n.currentTime)},e.updateSongPosition=function(e){var t=document.querySelector(".audio-clip"),n=e.target;if(t.readyState>2){var a=t.duration*(n.value/100);t.currentTime=a}},e.handleMouseDown=function(){var t=document.querySelector(".audio-clip");document.querySelector(".seek-bar").max=100,!1===t.paused&&(t.pause(),e.setState({dragging:!0}))},e.handleMouseUp=function(){var t=document.querySelector(".audio-clip");!0===e.state.dragging&&(t.play(),e.setState({dragging:!1}))},e.convertTime=function(e){var t=parseInt(e),n=Math.floor(t/36e5),a=Math.floor((t-36e5*n)/6e4),r=parseInt((t-36e5*n-6e4*a)/1e3);return r<10?"".concat(a,":0").concat(r):"".concat(a,":").concat(r)},e.checkForNewSong=function(){var t=document.querySelector(".audio-clip"),n=document.querySelector(".play-pause");""!==e.props.currentSetlist[e.props.currentSong].mp3&&e.props.currentSetlist[e.props.currentSong].mp3!==e.state.mp3&&(e.setState({mp3:e.props.currentSetlist[e.props.currentSong].mp3}),t.load(),t.play(),n.innerHTML='<i class="fas fa-pause"></i>')},e.changeVolume=function(){var e=document.querySelector(".audio-clip"),t=document.querySelector(".volume-control").value/100;e.volume=t},e.state={dragging:!1,mp3:""},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".seek-bar"),t=document.querySelector(".volume-control");e.value=0,t.value=100}},{key:"componentDidUpdate",value:function(){var e=document.querySelector(".audio-clip"),t=document.querySelector(".seek-bar"),n=document.querySelector(".play-pause");""!==this.props.currentSetlist[this.props.currentSong].mp3&&this.props.currentSetlist[this.props.currentSong].mp3!==this.state.mp3&&(this.setState({mp3:this.props.currentSetlist[this.props.currentSong].mp3}),n.innerHTML='<i class="fas fa-pause"></i>',e.currentTime=0,t.value=0,e.load(),e.play())}},{key:"changeSong",value:function(e){var t=document.querySelector(".audio-clip"),n=document.querySelector(".play-pause"),a=document.querySelector(".seek-bar");a.max=0,t.pause(),1===e&&this.props.currentSong<this.props.currentSetlist.length-1?(this.props.goToNextSong(1),this.checkForNewSong()):-1===e&&this.props.currentSong>0?(this.props.goToNextSong(-1),this.checkForNewSong()):(a.value=0,t.currentTime=0,n.innerHTML='<i class="fas fa-play"></i>')}},{key:"render",value:function(){var e=this,t=this.props.currentSetlist[this.props.currentSong];return r.a.createElement("footer",{className:"audio-player"},r.a.createElement("section",{className:"current-song-display"},r.a.createElement("h3",{className:"audio-player-song"},t.title),r.a.createElement("p",{className:"audio-player-venue"},this.props.currentShow.venue.name),r.a.createElement("p",{className:"audio-player-location"},this.props.currentShow.venue.location)),r.a.createElement("section",{className:"audio-player-controls"},r.a.createElement("video",{className:"audio-clip",onTimeUpdate:this.updateSeekBar},r.a.createElement("source",{src:t.mp3,type:"audio/mpeg"})),r.a.createElement("div",{className:"audio-controls"},r.a.createElement("p",{className:"current-time"},"0:00"),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-step-backward",onClick:function(){return e.changeSong(-1)}}),r.a.createElement("button",{onClick:this.togglePlay,type:"button",className:"play-pause"},r.a.createElement("i",{className:"fas fa-play"})),r.a.createElement("i",{className:"fas fa-step-forward",onClick:function(){return e.changeSong(1)}})),r.a.createElement("input",{onChange:this.updateSongPosition,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,type:"range",className:"seek-bar",min:"0",max:"0"}),r.a.createElement("p",{className:"song-length"},this.convertTime(t.duration))),r.a.createElement("input",{type:"range",className:"volume-control",onChange:this.changeVolume,min:"0",max:"100"})))}}]),t}(a.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).toggleShowAllConcerts=function(t,n){void 0!==n&&n.preventDefault(),e.setState({showAllConcerts:t})},e.updateRandomConcertData=function(t){t.preventDefault(),e.toggleShowAllConcerts(!1,t),e.forceUpdate()},e.updateCurrentSetlist=function(t){var n=e.state.concertData.find(function(e){return e.id===t});e.setState({currentSetlist:e.state.setlistData[t],currentShow:n})},e.goToNextSong=function(t){1===t?e.setState({currentSong:e.state.currentSong+1}):e.setState({currentSong:e.state.currentSong-1})},e.updateCurrentDisplay=function(t){e.setState({currentSearch:t})},e.updateCurrentSongIndex=function(t){e.setState({currentSong:t})},e.state={currentSong:0,currentSetlist:[{title:"--",mp3:"",duration:0}],currentShow:{date:"--",venue:{name:"--",location:"--"}},currentSearch:"",concertData:[],showAllConcerts:!1,concertVenues:[],concertDates:[],songs:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://whateverly-datasets.herokuapp.com/api/v1/phishShows").then(function(e){return e.json()}).then(function(t){e.setState({concertData:t.phishShows,concertVenues:Array.from(t.phishShows).map(function(e){return e.venue.name}),concertDates:Array.from(t.phishShows).map(function(e){return e.date})})}).catch(function(e){return console.error(e)}),fetch("https://whateverly-datasets.herokuapp.com/api/v1/setLists").then(function(e){return e.json()}).then(function(t){var n=Object.keys(t.setLists),a=[];n.forEach(function(e){Array.from(t.setLists[e]).forEach(function(e){a.push(e.title)})}),e.setState({setlistData:t.setLists,songs:a})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(g,{updateCurrentDisplay:this.updateCurrentDisplay,updateRandomConcertData:this.updateRandomConcertData,concertDates:this.state.concertDates,songs:this.state.songs,concertVenues:this.state.concertVenues,toggleShowAllConcerts:this.toggleShowAllConcerts}),r.a.createElement(v,{concertData:this.state.concertData,showAllConcerts:this.state.showAllConcerts,currentShow:this.state.currentShow,currentSetlist:this.state.currentSetlist,setlistData:this.state.setlistData,currentSearch:this.state.currentSearch,updateCurrentSong:this.updateCurrentSong,updateCurrentSongIndex:this.updateCurrentSongIndex,updateCurrentSetlist:this.updateCurrentSetlist,updateRandomConcertData:this.updateRandomConcertData,toggleShowAllConcerts:this.toggleShowAllConcerts}),r.a.createElement(y,{currentSong:this.state.currentSong,currentSetlist:this.state.currentSetlist,currentShow:this.state.currentShow,goToNextSong:this.goToNextSong}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.d00050e4.chunk.js.map