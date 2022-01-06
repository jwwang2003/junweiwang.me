import { AiOutlineSearch } from 'react-icons/ai';
import Layout from '../components/Layout';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default function Blog() {
  return (
    <Layout>
      <div className="w-2/3" style={{ maxWidth: '800px' }}>
        <div className="input-group relative flex flex-row items-stretch w-full mb-4">
          <Input type="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
          <Button>
            <AiOutlineSearch />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
