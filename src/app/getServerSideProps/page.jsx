import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: '/login', permanent: false },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}

export default function Profile({ user }) {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
