import React, { useState , useRef , useEffect} from 'react';
import { View } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import ComponentAssement from '../../component/assement/index';
import api from '../../service/api'
import styles from './styles';
import ComponentInput from '../../component/stage/index';
import {ErrorMessage , Formik , Form , Field } from 'formik';
import ComponentButton from '../../component/button/index';
import Loading from 'expo-app-loading'


const chat = () =>{

    const [dataMessage , setDataMessage] = useState([]);

    const nameRef = useRef(null);
    const localizationRef = useRef(null)
    const emailRef = useRef(null)
    const assementRef = useRef(null)
    const birthRef = useRef(null)

    const [ stage , setStage ] = useState(0)

    const [loading , setLoading] = useState(true);

    useEffect(()=>{

        api.get('/form').then((response) => {

            setDataMessage(response.data);

            setLoading(false);

        }).catch((error =>{
            alert(error)
        }))


    },[])

    if(loading){
        return <Loading/>
    }

    return(

        <View style={styles.container}>
            
            <View style={styles.containerSub}>

            </View>

            <ScrollView >

                <Formik initialValues={{name:'' , localization:'' , birth:Date , email:''}}>

                    {({values , handleChange , handleSubmit})=>(

                        <View style={styles.containerChat}>

                            <ComponentInput 
                            message={dataMessage[0].message}
                            id={0}
                            valueStage={stage}
                            SetStage={setStage}

                            placeholder={'seu nome'}
                            values={values.name} 
                            Ref={nameRef} 
                            handleChange={handleChange('name')}/>
                            
                            <ComponentInput 

                            message={dataMessage[1].message.replace('@', values.name)}
                            id={1}
                            valueStage={stage}
                            SetStage={setStage}
                            placeholder={'cidade e estado'}
                            values={values.localization} 
                            Ref={localizationRef} 
                            handleChange={handleChange('localization')}/>

                            <ComponentInput 

                            message={dataMessage[2].message}
                            id={2}
                            valueStage={stage}
                            SetStage={setStage}
                            placeholder={'00/00/0000'}
                            values={values.birth} 
                            Ref={birthRef} 
                            handleChange={handleChange('birth')}/>

                            <ComponentInput 

                            message={dataMessage[3].message}
                            id={3}
                            valueStage={stage}
                            SetStage={setStage}
                            placeholder={'digite seu email'}
                            values={values.email} 
                            Ref={emailRef} 
                            handleChange={handleChange('email')}/>


                            <ComponentAssement 
                            message={dataMessage[4].message}
                             id={4}
                             valueStage={stage}
                             SetStage={setStage}
                            
                            />

                            <ComponentButton 
                             text={'finalizar'} 
                             id={5}
                             valueStage={stage}
                             SetStage={setStage}

                            />
                        
                        </View>

                    )}

                </Formik>


            </ScrollView>
            
        </View>

    )

}

export default chat
 