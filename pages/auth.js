import { AiOutlineRight } from 'react-icons/ai';
import Layout from '../components/Layout';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default function Auth() {
  return (
    <Layout>
      <div className="flex justify-center">
        <form action="/authenticate" method="POST">
          <div className="flex flex-col mt-8 w-2/3 sm:w-96">
            <Input
              id="examplePassword0"
              type="password"
              autoComplete="name"
              required
              placeholder="Access key 🔑"
            />
            <Button type="submit">
              <AiOutlineRight />
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
