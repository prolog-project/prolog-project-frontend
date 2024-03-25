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
import ProjectUpdate from './ProjectUpdate';
import Note from './Note';
import NoteDeatil from './NoteDeatil';
import NoteWrite from './NoteWrite';
import NoteUpdate from './NoteUpdate';
import SignUp from './SignUp';
import Login from './Login';
import SearchEmail from './SearchEmail';
import SearchPassword from './SearchPassword';

function App(){
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/myPage' element={<MyPage />} />
                    <Route path='/myPageUpdate' element={<MyPageUpdate />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/project/:projectId' element={<ProjectDetail />} />
                    <Route path='/project/write' element={<ProjectWrite />} />
                    <Route path='/project/update' element={<ProjectUpdate />} />
                    <Route path='/note' element={<Note />} />
                    <Route path='/note/:noteId' element={<NoteDeatil />} />
                    <Route path='/note/write' element={<NoteWrite />} />
                    <Route path='/note/update/:noteId' element={<NoteUpdate />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/searchEmail' element={<SearchEmail />} />
                    <Route path='/searchPassword' element={<SearchPassword />} />
                </Routes>
                <PageUp />
            </BrowserRouter>
        </>
    );
}

export default App;