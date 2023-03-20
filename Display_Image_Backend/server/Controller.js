import Images from './model.js';
import mongoose from 'mongoose';


export const getPosts = async (req,res)=>{
    const loc = req.body;
    try {
        const images = await Images.find({location:loc});
        res.status(200).json(images);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};


export const createPost = async (req,res) =>{
    const post = req.body;
    const newPost = new Images(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}