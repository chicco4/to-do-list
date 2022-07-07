class Task {
    constructor(name, dueDate = 'No date') {
        this.name = name
        this.dueDate = dueDate
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }

    getDate() {
        return this.dueDate
    }

    getDateFormatted() {
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
}

import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName)
    }

    addTask(newTask) {
        if (this.tasks.find((task) => task.getName() === newTask.name)) return
        this.tasks.push(newTask)
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName)
    }

    getTasksToday() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted())
            return isToday(toDate(taskDate))
        })
    }

    getTasksThisWeek() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted())
            return isThisWeek(subDays(toDate(taskDate), 1))
        })
    }
}

const tasks = [];


const projects = []