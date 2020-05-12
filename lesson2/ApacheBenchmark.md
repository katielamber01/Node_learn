-----------------------8----------------------
ab -c 50 -n 500 localhost:1100/fast

---

ab means ApacheBenchamrk

-c 50 with concurency of 50 at the same time

-n 500 send 500 requests to localhost:1100/fast

RESULT:

Completed 500 requests
Finished 500 requests

Server Software:  
Server Hostname: localhost
Server Port: 1100

Document Path: /fast
Document Length: 4 bytes

Concurrency Level: 50
Time taken for tests: 0.328 seconds--------------------->
Complete requests: 500
Failed requests: 0
Total transferred: 101000 bytes
HTML transferred: 2000 bytes
Requests per second: 1524.58 [#/sec](mean)
Time per request: 32.796 [ms](mean)
Time per request: 0.656 [ms] (mean, across all concurrent requests)
Transfer rate: 300.75 [Kbytes/sec] received

Connection Times (ms)
min mean[+/-sd] median max
Connect: 0 2 2.8 1 11
Processing: 8 27 9.4 26 71
Waiting: 7 25 8.6 25 70
Total: 17 30 8.9 28 71

Percentage of the requests served within a certain time (ms)
50% 28
66% 31
75% 33
80% 34
90% 41
95% 51
98% 53
99% 63
100% 71 (longest request)
--------------------------------------9-------------------------
CLUSTER 1
THREAD 1
ab -c 1 -n 1 localhost:1100/

---

This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done

Server Software:  
Server Hostname: localhost
Server Port: 1100

Document Path: /
Document Length: 8 bytes

Concurrency Level: 1
Time taken for tests: 0.652 seconds------------------------>
Complete requests: 1
Failed requests: 0
Total transferred: 206 bytes
HTML transferred: 8 bytes
Requests per second: 1.53 [#/sec](mean)
Time per request: 651.677 [ms](mean)
Time per request: 651.677 [ms] (mean, across all concurrent requests)
Transfer rate: 0.31 [Kbytes/sec] received

Connection Times (ms)
min mean[+/-sd] median max
Connect: 0 0 0.0 0 0
Processing: 652 652 0.0 652 652
Waiting: 651 651 0.0 651 651
Total: 652 652 0.0 652 652

---

FOR 2 children and 2 requests:
ab -c 2 -n 2 localhost:1100/

---

MacBook-Air-beon:lesson2 beon$ ab -c 2 -n 2 localhost:1100/
This is ApacheBench, Version 2.3 <$Revision: 1826891 \$>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done

Server Software:  
Server Hostname: localhost
Server Port: 1100

Document Path: /
Document Length: 8 bytes

Concurrency Level: 2
Time taken for tests: 1.286 seconds
Complete requests: 2
Failed requests: 0
Total transferred: 412 bytes
HTML transferred: 16 bytes
Requests per second: 1.56 [#/sec](mean)
Time per request: 1285.623 [ms](mean)
Time per request: 642.812 [ms] (mean, across all concurrent requests)
Transfer rate: 0.31 [Kbytes/sec] received

Connection Times (ms)
.............min mean[+/-sd] median max
Connect: ....0... 0. 0.1 0 0
Processing: .638 643 7.0 648 648
Waiting: ....638 642 6.9 647 647
Total: ......638 643 7.0 648 648

Percentage of the requests served within a certain time (ms)
50% 648
66% 648
75% 648
80% 648
90% 648
95% 648
98% 648
99% 648
100% 648 (longest request)

CLUSTERS=2
THREAD=1
ab -c 2 -n 2 localhost:1100/

---
