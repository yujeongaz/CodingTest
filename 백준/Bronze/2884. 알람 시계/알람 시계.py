h, m = map(int, input().split())

m += h * 60
m -= 45
h = m // 60
m -= m // 60 * 60

if h < 0:
  h += 24

print(h, m)