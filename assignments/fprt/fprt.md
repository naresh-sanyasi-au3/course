1) 
Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents

method of encryption
Advanced Encryption Standard
Rivest-Shamir-Adleman
Triple Data Encryption Standard
Twofish

2)
a request will be sent to the DNS server based on your network configuration, DNS will route you to the real IP of the domain name, a request will be sent to the server,
Nginx(a web server) will try to match the url to its configuration and serve as an static page directly and  html will be sent back to browser with a complete Http response header.

3)
Persistent Connections provide a mechanism by which a client and a server can signal the close of a TCP connection. This signaling takes place using the Connection header field. Once a close has been signaled, the client MUST NOT send any more requests on that connection.

4)
Multithreading is a programming model that divides the processor to perform different tasks at the same time. It requires a processor with multiple threads.

Process means a program is in execution, whereas thread means a segment of a process.
A Process is not Lightweight, whereas Threads are Lightweight.
A Process takes more time to terminate, and the thread takes less time to terminate.
Process takes more time for creation, whereas Thread takes less time for creation.

5)
Indexing in DBMS:
An index is a small table having only two columns. The first column contains a copy of the primary or candidate key of a table and the second column contains a set of pointers holding the address of the disk block where that particular key value can be found.

Primary Index − The number of entries in the index table is the same as the number of entries in the main table.

Secondary Index − Secondary Index considers the index file, which we will now refer to as the first level of a secondary index.

Clustering Index − It may happen sometimes that we are asked to create an index on a non-unique key.

7)
Inner join:
Inner join can be used to retrieve only matched records between both tables, It doesn't return anything when match is not found, It is faster than outer join.
Outer join:
Outer join:
used to retrieve all matching records as well non matching records of the tables, It return null in the column values. it is slower than inner join.

8)
Cache is a type of memory that is used to increase the speed of data access. The data required for any process resides in the main memory. it is transferred to the cache memory temporarily if it is used frequently.

Cache memory lies on the path between the CPU and the main memory

A cache stores copies of expensive-to-access resources in much faster local storage. Some caches uses hashing functions as part of the lookup process, but it’s not required.

A hash maps a set of objects to a set of integers. If the hash is any good, that set of integers will be uniformly distributed over their range.

9)
 by using "node--max-old-space-size" command.

 6)
 Normalization is used to remove redundant data from the database and to store non-redundant and consistent data into it, Normalization uses optimized memory and hence faster in performance.

 Denormalization is used to combine multiple table data into one so that it can be queried quickly, Denormalization introduces some sort of wastage of memory.

 10)
 Any process that needs more memory than is physically available will require a form of Memory Swap, Virtual Memory is divided in pages. At some point, a page reside either in RAM or in Swap.