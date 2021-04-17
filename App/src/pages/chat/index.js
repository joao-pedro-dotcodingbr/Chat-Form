import React, { useState } from 'react';
import { View , Animated} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import ComponentAssement from '../../components/assement/index';
import api from '../../services/api'
import styles from './styles';
import ComponentInput from '../../components/stage/index';
import dataJson from '../../services/stages.json'
import FormSchema from '../../services/schema';
import { Formik } from 'formik';
import ComponentButton from '../../components/button/index';

const chat = () =>{

    const dataMessage = dataJson;
    // Etapas do formulário
    const [ stage , setStage ] = useState(0)

    return(

        <View style={styles.container}>
            
            <View style={styles.containerSub}>

               

            </View>

            <ScrollView >

                <Formik initialValues={{name:'' , localization:'' , birth:'' , email:'', assessment:0 }} 
                onSubmit={( result , actions) =>{

                      api.post('/users',{

                        ...result
                        
                      }).then(() =>{

                        alert('Cadastro finalizado')

                      }).catch(error =>{
                          alert('Ocorreu algum erro no cadastro, tente novamente')
                          console.log(error)
                      })
                      actions.setSubmitting(false); 
                      
                      
                }} validationSchema={FormSchema}>   

                    {(propsFormik)=>(
 
                        <View style={styles.containerChat}>

                            <ComponentInput

                            id={0}
                            propsFormik={propsFormik}
                            keyFormik='name'
                            message={dataMessage[0].message}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="Digite seu nome"
                         
                            />

                            <ComponentInput

                            id={1}
                            propsFormik={propsFormik}
                            keyFormik='localization'
                            message={dataMessage[1].message.replace("@", propsFormik.values.name)}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="Digite a cidade e estado"

                            />

                            <ComponentInput

                            id={2}
                            propsFormik={propsFormik}
                            keyFormik='birth'
                            message={dataMessage[2].message}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="00/00/0000"

                            />

                            <ComponentInput

                            id={3}
                            propsFormik={propsFormik}
                            keyFormik='email'
                            message={dataMessage[3].message}
                            valueStage={stage}
                            SetStage={setStage}

                            autoFocus
                            placeholder="Digite seu email"

                            />

                            <ComponentAssement 
          
                             message={dataMessage[4].message}
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
 