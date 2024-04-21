export default function Login() {
  return (
    <form action="">
      <table>
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="username"> username </label>
            </td>
            <td>
              <input type="text" id="username" className="text-zinc-900	" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password"> password </label>
            </td>
            <td>
              <input type="password" id="password" className="text-zinc-900" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
