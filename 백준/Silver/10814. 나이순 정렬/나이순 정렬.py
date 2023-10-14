import sys
input = sys.stdin.readline

n = int(input())
arr = []
for i in range(n):
  arr.append([i])

for i in range(n):
  arr[i].extend(input().split())
  arr[i][1] = int(arr[i][1])

arr.sort(key = lambda x : [x[1], x[0]])
for i in range(n):
  print(f"{arr[i][1]} {arr[i][2]}")