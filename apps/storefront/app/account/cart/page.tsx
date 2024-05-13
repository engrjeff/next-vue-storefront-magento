import { CartView } from '@/components/CartView';
import Container from '@/components/Container';

export default function CustomerCartPage() {
  return (
    <Container>
      <h1>Your Cart</h1>
      <CartView />
    </Container>
  );
}
