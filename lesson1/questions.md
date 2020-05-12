1.can we use the threadpool for js code or only node functions use it
1.Answer: we can write custom JS that uses the thread pool

2.What functions in node std library use the threadpool?
2.Answer. All fs modue functions. Some crypto stuff. Depends on OS (windows or unix based)

3.how does this threadpool stuff fit into the event loop?
3.Answer. Task running in the threadpool are the 'pending Operations' in our code example

4.What functions in node std library use OS's async features?
4.Answer. Almosr everything around netoring for all OS's. Some other stuff os OS specific.

5.How does this os async stuff fit into the event loop?
5.Answer. Tasks using the underlying OS are reflected in our 'pendingOsTasks' array
