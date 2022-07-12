import PostMessage from '../models/postMessage.js';


export const getPosts = async (req, res) => {
    try {
        const postMessage = await postMessage.find();

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createdPost = async (req, res) =>{
    
    const post = req.body;
    const newPost = new postMessage(post);

    try {
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}