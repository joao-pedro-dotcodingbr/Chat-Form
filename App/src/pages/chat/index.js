import React, { useState , useRef , useEffect} from 'react';
import { View , Animated} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import ComponentAssement from '../../component/assement/index';
import api from '../../services/api'
import styles from './styles';
import ComponentInput from '../../component/stage/index';

import FormSchema from '../../services/schema';
import { Formik } from 'formik';
import ComponentButton from '../../component/button/index';
import Loading from 'expo-app-loading';

const chat = () =>{

    const [dataMessage , setDataMessage] = useState([]);
    const [ stage , setStage ] = useState(0)
    const [loading , setLoading] = useState(false);

const fadeAnimation = useRef(new Animated.Value(0)).current

const ShowNotification = (errors) =>{

    if(errors){

        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(3000),
            Animated.timing(fadeAnimation, {
                toValue: 0,
                duration:500,
                useNativeDriver: true,
            })
        ]).start()  

    }
      
}

/*
    useEffect(()=>{

        api.get('/form').then((response) => {

            setDataMessage(response.data);

            setLoading(false);

        }).catch((error =>{
            alert(error)
        }))


    },[])

    text = dataMessage[0].message,
    dataMessage[1].message.replace('@', values.name)

    */

    if(loading){
        return <Loading/>
    }

    return(

        <View style={styles.container}>
            
            <View style={styles.containerSub}>

                <Animated.View style={[ {width:100, height:100 , backgroundColor:'#000'}, {opacity: fadeAnimation}]}>

                </Animated.View>

            </View>

            <ScrollView >

                <Formik initialValues={{name:'' , localization:'' , birth:Date , email:'', assement:0 }} 
                onSubmit={( result , actions) =>{

                    alert(JSON.stringify(result))

                    setTimeout(() => {
                        actions.setSubmitting(false); 
                      }, 3000);
                      
                    console.log('teste')

                }} validationSchema={FormSchema}>   

                    {(propsFormik)=>(
 
                        <View style={styles.containerChat}>

                            <ComponentInput

                            id={0}
                            propsFormik={propsFormik}
                            keyFormik='name'
                            message={'teste'}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="Digite seu nome"
                         
                            />

                            <ComponentInput

                            id={1}
                            propsFormik={propsFormik}
                            keyFormik='localization'
                            message={'teste'}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="Digite a cidade e estado"

                            />

                            <ComponentInput

                            id={2}
                            propsFormik={propsFormik}
                            keyFormik='birth'
                            message={'teste'}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="00/00/0000"

                            />

                            <ComponentInput

                            id={3}
                            propsFormik={propsFormik}
                            keyFormik='email'
                            message={'teste'}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="Digite seu email"

                            />

                            <ComponentAssement 
          
                             message={'testes'}
                             id={4}
                             propsFormik={propsFormik}
                             valueStage={stage}
                             SetStage={setStage}
                            
                            />

                            <ComponentButton 

                             propsFormik={propsFormik}
                             text={'finalizar'} 
                             id={5}
                             valueStage={stage}

                            />
                        
                        </View>

                    )}

                </Formik>


            </ScrollView>
            
        </View>

    )

}

export default chat
 