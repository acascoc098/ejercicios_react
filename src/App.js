//import logo from './logo.svg';
import './App.css';
import UseCard from './UserCard/UserCard';
import UserList from './UserList/UserList';

function App() {
  return (
    <div className="App">
      <h1>EJERCICIO 1</h1><br></br>
      <UseCard imagen="https://pbs.twimg.com/media/DsOV0vBVAAAsyrH?format=jpg&name=small" alt="Andrea" nombre="Andrea Castilla" fechanac="20-11-2002" descripcion="Nueva empleada" empresa="NTT Data"/>
      <br></br>
      <UseCard imagen="https://www.peoplefirst.blog/wp-content/uploads/2018/03/Delsol_Exterior_web.jpg" alt="María" nombre="María Pérez" fechanac="28-01-2000" descripcion="Encargada" empresa="Software del Sol"/>
      <br></br>
      <UseCard imagen="https://www.silicon.es/wp-content/uploads/2022/04/NTT-DATA-to-acquire-Acorio-1280x720-1-684x513.jpg" alt="Lucia" nombre="Lucía Martínez" fechanac="20-12-2001" descripcion="Programadora" empresa="NTT Data"/>
      <br></br>
      <UseCard imagen="https://dkp-it.com.br/wp-content/uploads/2019/03/blog-oracle.jpg" alt="Laura" nombre="Laura Herrán" fechanac="03-11-1998" descripcion="Administrativa" empresa="Oracle"/>
      <br></br>
      <UseCard imagen="https://s1.eestatic.com/2021/04/28/sociedad/consumo/577203221_182883896_1706x960.jpg" alt="Martín" nombre="Martín Núñez" fechanac="14-07-2002" descripcion="Becario" empresa="Mercadona"/>

      <br></br>
      <h1>EJERCICIO 2</h1>
      <br></br>
      <UserList/>
    </div>
  );}

export default App;
