import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';



@Controller('/api/v1/task')//aca modificamos la iury
export class TaskController {
    //antes del metodo llamamos a nuestro servicio por constructor
    constructor (private readonly taskService: TaskService){}
    //crear tarea
    @Post()
    create (@Body() TaskDTO:TaskDTO){
        // return new Promise (( resolve , reject) =>{
        //     setTimeout( () => reject ('Error en peticion'), 6000)
        // }); prueba para ver errores
        return this.taskService.create(TaskDTO);
    }
    //traer tareas
    @Get()
    findAll(){
        return this.taskService.findAll();
    }
    //traer una tarea
    @Get(':id')
    findOne (@Param('id') id:string){
        return this.taskService.findOne(id);
    }
    //Actualizar Tarea
    @Put(':id')
    update(@Param ('id') id : string, @Body()TaskDTO:TaskDTO){
        return this.taskService.update(id, TaskDTO);
    }

    //Borrar Tarea
    @Delete(':id')
    delete(@Param ('id') id: string){
        return this.taskService.delete(id);
        
    };
}
