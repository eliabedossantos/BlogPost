import React,{ useState, useEffect } from 'react';
import { TopContainer, H1 } from './BlogList.styled';
import CardPost from '../../layout/CardPost/CardPost';
import { FlatList, Alert } from 'react-native';


export default props => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setPosts(data);

        })
        .catch(err => {
            console.warn(err);
        });
    }, []);

    function DeletePost(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setPosts(posts.filter(post => post.id !== id));
        }
        )
        .catch(err => {
            console.warn(err);
        }
        );
    }
    function confirmDelete(id) {
        Alert.alert(
            'Confirmação',
            'Deseja realmente excluir o post?',
            [
                { 
                    text: 'Não', 
                    onPress: () => console.warn('Cancelado'),
                    style: 'cancel' 
                },
                { 
                    text: 'Sim', 
                    onPress: () => DeletePost(id)
                },

            ],
            { cancelable: false }
        );
    }
    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => {
                return (
                    <CardPost
                        title={item.title}
                        body={item.body}
                        id={item.id}
                        onPressEdit={() => props.navigation.navigate('BlogForm', { id: item.id })}
                        onPressDelete={() => confirmDelete(item.id)}

                        
                    />
                );
            }}
            keyExtractor={item => item.id.toString()}
        />
    );
}