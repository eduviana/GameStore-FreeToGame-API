export function randomPrice() {
    const random = Math.ceil(Math.random() * (100 - 1) + 1);
    return random.toFixed(0);
  }
  