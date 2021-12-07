import { Link } from "react-router-dom";
import { TableProps } from "../../../interface/components";
import { Container, Image } from "./styles";

const Table = ({ data, columns, ...args }: TableProps) => {
  return (
    <Container {...args} cellSpacing="0">
      <thead>
        <tr>
          {columns.map(({ name }, index) => (
            <th key={index}>
              <small>{name}</small>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <>
            {args?.redirectTo ? (
              <tr onClick={() => args?.onClickElement(item)} key={index}>
                <td>
                  <Link to={args?.redirectTo}>
                    {columns.map(({ name, key, type }, index) => (
                      <span key={index}>
                        {type !== "image" ? (
                          item[key]
                        ) : (
                          <Image src={item[key]} alt={name} />
                        )}
                      </span>
                    ))}
                  </Link>
                </td>
              </tr>
            ) : (
              <tr onClick={() => args?.onClickElement(item)} key={index}>
                {columns.map(({ name, key, type }, index) => (
                  <td key={index}>
                    {type !== "image" ? (
                      item[key]
                    ) : (
                      <Image src={item[key]} alt={name} />
                    )}
                  </td>
                ))}
              </tr>
            )}
          </>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
