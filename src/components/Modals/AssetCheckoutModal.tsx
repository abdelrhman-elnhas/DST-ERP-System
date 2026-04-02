import { useAssetCheckout } from '@/hooks/useAssets';
import { useModalStore } from '@/store/modalStore';
import { User, UserResponse } from '@/types/user';
import { useState } from 'react'
import { Button } from '../ui-elements/button';
import InputGroup from '../FormElements/InputGroup';

const AssetCheckoutModal = ({ id, name }: { id: number, name: string }) => {
  const storedUser = localStorage.getItem("user");
  const parsedUser: (UserResponse & { token: string }) | null = storedUser ? JSON.parse(storedUser) : null;

  const [data, setData] = useState({
    id: id,
    user_id: parsedUser?.user?.id ?? 0,
    expected_return: ""
  });

  const assetCheckout = useAssetCheckout();
  const { closeModal } = useModalStore();

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      id: id,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      await assetCheckout.mutateAsync(data);
      closeModal();
    } catch (err: any) {
      console.error(err.message ?? "Something went wrong");
    }
  };

  return (

    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <InputGroup
            type="date"
            name="expected_return"
            value={data.expected_return}
            handleChange={handleChange}
            placeholder="Enter expected return date"
            label="Expected Return Date"
            required
            className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
          />
        </div>
      </form>
      <div className="flex items-center justify-end gap-3 pt-2">
        <Button
          onClick={closeModal}
          className="rounded-lg border border-stroke px-5 py-2.5 text-sm font-medium text-dark transition hover:bg-opacity-70 dark:border-dark-3 dark:text-white dark:hover:bg-dark-3"
          label="Cancel"
        />
        <Button
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-opacity-70 disabled:opacity-65"
          // disabled={assetCheckout.isPending}
          label={assetCheckout.isPending ? "Returning..." : "Return"}
          onClick={handleSubmit}
        />
      </div>
    </>

  );
}



export default AssetCheckoutModal