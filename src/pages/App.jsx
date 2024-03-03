import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import PageUp from '../components/PageUp';
import Main from './Main';
import MyPage from './MyPage';
import MyPageUpdate from './MyPageUpdate';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import ProjectWrite from './ProjectWrite';
import Note from './Note';
import NoteDeatil from './NoteDeatil';
import NoteWrite from './NoteWrite';
import SignUp from './SignUp';
import Login from './Login';
import SearchEmail from './SearchEmail';
import SearchPassword from './SearchPassword';

function App(){
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/myPage' element={<MyPage />} />
                    <Route path='/myPageUpdate' element={<MyPageUpdate />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/project/:projectId' element={<ProjectDetail />} />
                    <Route path='/project/write' element={<ProjectWrite />} />
                    <Route path='/note' element={<Note />} />
                    <Route path='/note/:noteId' element={<NoteDeatil />} />
                    <Route path='/note/write' element={<NoteWrite />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/searchEmail' element={<SearchEmail />} />
                    <Route path='/searchPassword' element={<SearchPassword />} />
                </Routes>
            </BrowserRouter>
            <PageUp />
        </>
    );
}

export default App;