import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "./assets/logo.png"
import { ActivityIndicator, Button, ImageBackground, ProgressBar, ScrollView, Switch, TextInput, TouchableWithoutFeedback } from 'react-native-web';
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';
export default function App() {
  // let  [name, setName] = useState("");
  // let [counter, setCounter] = useState(1)
  // let [phone, setPhone] = useState("")
  // let [email, setEmail] = useState("")
  // let [show, setShow] = useState(false)
  // function handleClick(){
  //   setCounter(counter+counter)
  // }
  let [image, setImage] = useState([{img:"https://png.pngtree.com/recommend-works/png-clipart/20240623/ourmid/pngtree-pink-ribbon-bow-png-image_12828363.png", name:"yee", id:1},  {img:"https://png.pngtree.com/recommend-works/png-clipart/20240623/ourmid/pngtree-pink-ribbon-bow-png-image_12828363.png", name:"yee2", id:2},  {img:"https://png.pngtree.com/recommend-works/png-clipart/20240623/ourmid/pngtree-pink-ribbon-bow-png-image_12828363.png", name:"yee1", id:3}])
  let [loading, setLoading] = useState(false)
  let [loader, setLoader] = useState(false)
  let [ids, setIds] = useState(0)
  let [name, setName] = useState("")
  let [img, setImg] = useState("")
  function removeImage(id){
    setLoader(true)
    setIds(id)
    setTimeout(() => {
      setImage(image.filter(img=>img.id!==id))
      setLoader(false)
    }, 1000)
  }
  function addImage(){
    if(img.trim() !== '' && name.trim() !== ''){
      setLoader(true)
      let newImage = {
        id:image.length+1,
        name:`${name}`,
        img:`${img}`
      }
      setIds(newImage.id)
      setTimeout(() => {
        setImage([...image, newImage])
        setLoader(false)
        setIds(-1)
      }, 3000)
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Add Image</Text>
        <TextInput style={styles.input} placeholder="Image name" value={name} onChangeText={setName} placeholderTextColor={"gray"}/>
        <TextInput style={styles.input} placeholder="Image URL" value={img} onChangeText={setImg} placeholderTextColor={"gray"}/>
        <TouchableWithoutFeedback onPress={addImage}>
          <Text style={styles.button}>Add</Text>
        </TouchableWithoutFeedback>
        {image.findIndex(img=>img.id ===ids) === -1 && (<ActivityIndicator animating={loader} color={'pink'} size={'small'}/>)}
      </View>
      <Text style={styles.text}>Show images</Text>
      <Switch value={loading} thumbColor={"pink"} trackColor={"#dd9d9d"} onValueChange={setLoading} activeThumbColor={'#ff9494'} activeTrackColor={"#d25b5b"}></Switch>
      { loading && <ScrollView contentContainerStyle={styles.form} style={{width:"100%"}}>
        {image.map(img=>(
          <TouchableHighlight id={img.id} key={img.id} onLongPress={()=>removeImage(img.id)} style={{width:150, height:150}}>
            <ImageBackground source={{uri:img.img}} style={styles.imageContainer} imageStyle={styles.image}>
              <Text style={styles.imageText}>{ids === img.id ? (<ActivityIndicator animating={loader} color={'pink'} size={'small'}/>) :img.name}</Text>
            </ImageBackground>
          </TouchableHighlight>
        ))}
      </ScrollView>}
    {/* //   <Text style={styles.title}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Image source={logo} style={styles.image}/>
    //   <Button title={'abobus'} onPress={()=>alert('sdaldaldad')}/>
    //   <TextInput value={name} onChangeText={setName}/> */}
      {/* <View style={styles.f}>
        <Text>f</Text>
      </View>
      <View style={styles.m}>
        <Text>m</Text>
      </View>
      <View style={styles.l}>
        <Button title={counter} onPress={handleClick}/>
      </View> */}
      {/* <View style={styles.header}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.text}>Yayyy</Text>
      </View>
      <View style={styles.form}>
        <TextInput value={name} onChangeText={setName} placeholder='Name' style={styles.input}/>
        <TextInput value={phone} onChangeText={setPhone} placeholder='Phone number' style={styles.input}/>
        <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.input}/>
        <Button title={'Login'} onPress={()=>setShow(true)}/>
      </View>
      <View style={show ? styles.show : styles.none}>
        <Text>Hello, {name}!</Text>
        <Text>📞{phone}</Text>
        <Text>✉️{email}</Text>
      </View> */}
    </View>


  );
}

const styles = StyleSheet.create({
  // show:{
  //   flexDirection:"column",
  //   justifyContent:"center",
  //   alignItems:"center",
  //   gap:3
  // },
  // none:{
  //   display:"none"
  // },
  // header:{
  //   backgroundColor:"pink",
  //   width:"100%",
  //   height:70,
  //   flexDirection:'row',
  //   justifyContent:'space-between',
  //   alignItems:'center',
  //   paddingHorizontal:20,
  // },
  image:{
    width:70,
    height:70,
    
  },
  imageContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text:{
    fontFamily:"monospace",
    fontSize:20,
  },
  form:{
    width:"100%",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:3,
    padding:5
  },
  input:{
    width:"80%",
    height: 30,
    borderWidth:2,
    borderColor:"pink",
    padding:5,
    borderRadius:5,
    fontSize:18,
    fontFamily:"monospace"
  },
  button:{
    width:"80%",
    height: 30,
    backgroundColor:"pink",
    color:"#ffffff",
    padding:5,
    borderRadius:5,
    fontSize:18,
    textAlign:"center",
    fontFamily:"monospace"
  },
  // f:{
  //   backgroundColor:"pink",
  //   borderWidth:4,
  //   borderTopLeftRadius:20,
  //   borderTopRightRadius:20,
  //   flex:0.3,
  //   width:100,
  //   justifyContent:"center"
  // },
  // l:{
  //   backgroundColor:"salmon",
  //   borderWidth:4,
  //   borderBottomLeftRadius:20,
  //   borderBottomRightRadius:20,
  //   flex:0.3,
  //   width:100,
  //   justifyContent:"center"
  // },
  // m:{
  //   backgroundColor:"beige",
  //   borderWidth:4,
  //   flex:0.3,
  //   width:100,
  //   justifyContent:"center"
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // title: {
  //   color:"red"
  // },
  // image:{
  //   width: 100,
  //   height:100
  // }
});
