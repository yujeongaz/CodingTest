#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS

int main() {
  long long a, b, c;

  scanf("%lld %lld %lld", &a, &b, &c);
  printf("%lld", a + b + c);
  
  return 0;
}