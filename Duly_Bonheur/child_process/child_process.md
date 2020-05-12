1.
Start a new process with either a command, a file, a node programm sync or async
while your program is running

ASYNC
child_process.spawn()
child_process.exec()
child_process.execFile()
child_process.fork()

SYNC (program will wait your program t determinate before the parent continues
child_process.spawnSync()
child_process.execSync()
child_process.execFileSync()

EVENTS:
"close":when stdio streams close
"disconnect":after child.disconnect() is called by parent
"error":when error occurs (no spawn, cannot kill, message from parent failed)
"message": when processs.send() is called by child
"exit":when process ends

CHILD_PROCESS
child.disconnect()
child.kill([signal])
child.send(message,handle,options,callback)
child.connect
child.channel
child.pid
child.stdin
child.stdout
child.stderr
child.stdio

2.
child_process.spawn(command,[args],{options})
