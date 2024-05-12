import { getMegamenu } from '@/services/queries/getMegamenu';
import Container from './Container';
import Megamenu from './Megamenu';

async function Categories() {
  const data = await getMegamenu();

  if (!data) return null;

  const { displayedCategories, megamenu } = data;

  return (
    <Container className="hidden xl:block p-0">
      <Megamenu categories={displayedCategories} megamenu={megamenu} />
    </Container>
  );
}

export default Categories;
