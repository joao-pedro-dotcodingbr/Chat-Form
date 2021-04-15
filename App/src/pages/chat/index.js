import React, { useState , useRef} from 'react';
import { View ,  Text , TouchableOpacity} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import ComponentAssement from '../../component/assement/index';

import styles from './styles';
import ComponentInput from '../../component/stage/index';
import {ErrorMessage , Formik , Form , Field } from 'formik';
import ComponentButton from '../../component/button/index';

const chat = () =>{

    const nameRef = useRef(null);
    const localizationRef = useRef(null)
    const emailRef = useRef(null)
    const assementRef = useRef(null)
    const birthRef = useRef(null)

    return(

        <View style={styles.container}>
            
            <View style={styles.containerSub}>

            </View>

            <ScrollView >

                <Formik initialValues={{name:'' , localization:'' , birth:Date , email:''}}>

                    {({values , handleChange , handleSubmit})=>(

                        <View style={styles.containerChat}>

                            <ComponentInput 

                            placeholder={'seu nome'}
                            values={values.name} 
                            Ref={nameRef} 
                            handleChange={handleChange('name')}/>
                            
                            <ComponentInput 
                            
                            placeholder={'cidade e estado'}
                            values={values.localization} 
                            Ref={localizationRef} 
                            handleChange={handleChange('localization')}/>

                            <ComponentInput 

                            placeholder={'00/00/0000'}
                            values={values.birth} 
                            Ref={birthRef} 
                            handleChange={handleChange('birth')}/>

                            <ComponentInput 
                        
                            placeholder={'digite seu email'}
                            values={values.email} 
                            Ref={emailRef} 
                            handleChange={handleChange('email')}/>


                            <ComponentAssement />

                            <ComponentButton text={'finalizar'} />
                        
                        </View>

                    )}

                </Formik>


            </ScrollView>
            
        </View>

    )

}

export default chat
 