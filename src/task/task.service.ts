import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class TaskService {
    //crear una tarea
    tasks: ITask[] = []; //inicializo mis tareas en vacio
    create(taskDTO : TaskDTO):ITask{ //son de tipo mi interface de tarea
        const task = {
            id: uuidv4(),
            ...taskDTO,
        };
        this.tasks.push(task);
        return task;
    };

    //traer todas las tareas
    findAll(): ITask[] {
        return this.tasks;
    };

    //traer una tarea
    findOne( id: string): ITask{
        return this.tasks.find((t) => t.id === id);
    };

    //actualizar tarea
    update(id: string, taskDTO:TaskDTO): ITask{
        const newTask = {id, ...taskDTO};
        this.tasks = this.tasks.map((t) =>( t.id === id ? newTask : t));
        return newTask;
    };

    //borrar tarea
    delete(id: string):string {
        this.tasks = this.tasks.filter((t) => t.id !== id);
        return 'Taks Deleted'
    };



}
