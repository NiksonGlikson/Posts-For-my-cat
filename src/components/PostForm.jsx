import React, { useState } from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

// создали колбэк пропс с вызовом функции, чтобы поднять наверх пропс
const PostForm = ({create}) => {
    // Создаем стейт с постами. посты по дефолту должны быть пустыми строками
      const [post, setPost] = useState({ title: '', body: '' });
    
      const AddNewPost = (e) => {
        // запрещаем дефолтное поведение браузера
        e.preventDefault();
        // создаем новый пост
        const newPost = {
            ...post, id: Date.now()
        }
        // передаем в функцию создания поста новый пост
        create(newPost);
        // очищаем стейт такими же дефолтными значения как выше при создании стейта
        setPost({ title: '', body: '' })
      };

    return (
            //   {/* Создаем управляемый компонент */}
        <form>
            <MyInput 
              type="text"
              placeholder="name post"
              // функция которая ловит изменения стейта
              onChange={e => setPost({ ...post, title: e.target.value })}
              value={post.title}
            />
            <MyInput 
              type="text"
              placeholder="description"
              onChange={e => setPost({ ...post, body: e.target.value })}
              value={post.body}
            />
            <MyButton onClick={AddNewPost}>Add post</MyButton>
        </form>
    );
}

export default PostForm;
