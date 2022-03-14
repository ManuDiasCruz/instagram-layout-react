export default function Main(){
  return (
    <main>
      <Content />
      <Sidebar />
    </main>
  );
}

function Content(){
  return (
    <div className="content-container">
      <Stories />
      <Posts />
    </div>
  );
}

function Stories(){
  const users = [
    {name:"meowed"},
    {name:"barked"},
    {name:"nathanwpylestrangeplanet"},
    {name:"wawawicomics"},
    {name:"respondeai"},
    {name:"filomoderna"},
    {name:"memeriagourmet"}
  ];

  return (
    <div className="stories">
      {users.map( (user) =>
          <Story name={user.name}/>
        )              
      }  
      <SmallArrow />
    </div>
  );
}

function Story(props){
  return (
    <div className="story">
      <div className="image">
        <img src={`assets/img/${props.name}.svg`} alt=""/>
      </div>
      <div className="user">
        {props.name}
      </div>
    </div>
  );
}

function SmallArrow(){
    return (
        <div className="small-arrow">
              <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

function Posts(){
  const post = [
    {username: "meowed", content: "gato-telefone", newestLike: "respondeai", numberOfLikes: 101.523},
    {username: "barked", content: "dog", newestLike: "adorable_animals", numberOfLikes: 99.159}
  ];
  return (
    <div className="posts">
      {post.map((post) => 
          <Post username={post.username} content={post.content} newestLike={post.newestLike} numberOfLikes={post.numberOfLikes} />
        )
      }
    </div>
  );
}

function Post(props){
  return(
    <div className="post">
      <div className="header-post">
        <div className="user">
          <img src={`assets/img/${props.username}.svg`} alt=""/>
          {props.username}
        </div>
        <div className="more">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="content">
        <img src={`assets/img/${props.content}.svg`} alt=""/>
      </div>

      <div className="footer-post">
        <div className="iteractions">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        <div>
        <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        </div>

        <div className="users-iteractions">
          <img src={`assets/img/${props.newestLike}.svg`} alt=""/>
          <div className="text">
            Curtido por <strong>respondeai</strong> e <strong>outras {props.numberOfLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar(){
  return (
    <aside>
      <LoggedUser />
      <Sugestions />
      <Links />
      <Copyright />
    </aside>
  );
}

function LoggedUser(){
  return (
    <User username="catanacomics" name="Catana" />
  );
}

function User(props){
  return (
    <div className="user">
      <img src={`assets/img/${props.username}.svg`} alt=""/>
      <div className="text">
        <strong>{props.username}</strong>
        {props.name}
      </div>
    </div>
  );
}

function Sugestions(){
  const users = [
    {name: "bad.vibes.memes", reason: "Segue você"},
    {name: "chibirdart", reason: "Segue você"},
    {name: "razoesparaacreditar", reason: "Novo no Instagram"},
    {name: "adorable_animals", reason: "Segue você"},
    {name: "smallcutecats", reason: "Segue você"}
  ];
  return (
    <div className="suggestions">
      <div className="title">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {users.map( (user) =>               
          <Suggestion name={user.name} reason={user.reason} />
        )              
      }
      </div>
  );
}

function Suggestion(props){
  return (
    <div className="suggestion">
      <div className="user">
        <img src={`assets/img/${props.name}.svg`} alt=""/>
        <div className="text">
          <div className="name">{props.name}</div>
          <div className="reason">{props.reason}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

function Links(){
  return (
    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Copyright(){
  return (
    <div className="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  );
}