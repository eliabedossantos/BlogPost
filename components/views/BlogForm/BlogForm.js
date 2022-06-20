import React, {useState} from 'react';
import {Container, FormGroup, LabelInput, Input, ButtonSubmit} from './BlogForm.styled';
export default ({route, navigation}) => {
    const [post, setPost] = useState(route.params ? route.params : {});
    const handleSubmit = () => {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: post.title,
                body: post.body
            })
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    
    return (
        <Container>
            <FormGroup>
                <LabelInput>Título:</LabelInput>
                <Input 
                    onChangeText={title  => setPost({...post, title: title})}
                    placeholder="Título do post"
                    value={post.title}
                    multiline={true}
                />
                <LabelInput>Conteúdo:</LabelInput>
                <Input
                    onChangeText={body => setPost({...post, body: body})}
                    placeholder="Conteúdo do post"
                    value={post.body}
                    multiline={true}
                    style={{height: 150}}
                />
                <ButtonSubmit  title="salvar" />
            </FormGroup>
        </Container>
    )
}