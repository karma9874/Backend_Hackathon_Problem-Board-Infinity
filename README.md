# Hackathon backedn API Broad Infinity

### Usage

```
    /list - (GET request)
    * This will list all the available task in JSON format

    /add  - (POST request)
    * Parameters (accepts in JSON format)
        * task_name -> Name of the task
        * task_desc -> Description of the task
        * task_creator -> Name of the creator
        * task_duration -> Duration of the task

```

### Description 

##### Day 1

```
* Setup basic structure of nodejs and mongodb (atlas)
* Added routing for /list and /add
* Created mondodb schema and linked it with the routing data's
```

##### Day 2

```
* Added error handling to inputs
* Added the TTL feature of mongodb to delete expired task
* Deployed the code to heruko
* Added environment variables
```