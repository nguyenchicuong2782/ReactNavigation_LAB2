import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator,} from 'react-native';
import colors from '../../utils/colors';
import ContactThumbnail from '../../components/ContactThumbnail';
import {fetchUserContact} from '../../utils/api';

const User = () =>
{
    const [user, setUser]=useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //Load
    useEffect(()=>{
        fetchContacts()
        .then(
            contacts=> {
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e=>{
                setLoading(false);
                setError(true);
            }
        )
    });
    const {name, avatar, phone } = user;

    return (
        <View style={styles.container}>
        {loading && <ActivityIndicator size ="large"/>}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
            <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
        )}
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
    },
});
export default User;
