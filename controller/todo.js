var model = require('../models')

const todos = {
    getTodo: async (req, res) => {
        let todos = [];

        try {
            todos = await model.todo.findAll();
        } catch (e) {
            console.log(e);
        }

        res.json(todos)
    },
    findTodo: async (req, res) => {
        let todo = [];

        try {
            todo = await model.todo.findOne({
                where: {
                    id: req.params.id
                }
            })
        } catch (e) {
            console.log(e);
        }

        res.json(todo)
    },
    createTodo: async (req, res) => {
        let todo = {};

        try {
            todo = await model.todo.create({
                title: req.body.title,
                description: req.body.description
            })
        } catch (e) {
            console.log(e);
        }

        res.json(todo)
    },
    updateTodo: async (req, res) => {
        let todo = {};

        try {
            todo = await model.todo.update(
                req.body, {
                where: {
                    id: req.params.id
                }
            }
            );
        } catch (e) {
            console.log(e);
        }

        res.json(todo);
    },
    deleteTodo: async (req, res) => {
        await model.todo.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(204).json({
            status: 'Success'
        })
    }
}

module.exports = todos