import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  location: Scalars['String'];
  owner: Scalars['String'];
  picture: Scalars['String'];
  price: Scalars['Float'];
  tags: Array<Tag>;
  title: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createCategory: Category;
  createTag: Tag;
  deleteAd: Scalars['String'];
  deleteCategory: Scalars['String'];
  deleteTag: Scalars['String'];
  updateAd: Ad;
  updateCategory: Category;
  updateTag: Tag;
};


export type MutationCreateAdArgs = {
  data: NewAdInput;
};


export type MutationCreateCategoryArgs = {
  data: NewCategoryInput;
};


export type MutationCreateTagArgs = {
  data: NewTagInput;
};


export type MutationDeleteAdArgs = {
  adId: Scalars['Float'];
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Float'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['Float'];
};


export type MutationUpdateAdArgs = {
  adId: Scalars['Float'];
  data: UpdateAdInput;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['Float'];
  data: UpdateCategoryInput;
};


export type MutationUpdateTagArgs = {
  data: UpdateTagInput;
  tagId: Scalars['Float'];
};

export type NewAdInput = {
  category: ObjectId;
  description: Scalars['String'];
  location: Scalars['String'];
  owner: Scalars['String'];
  picture: Scalars['String'];
  price: Scalars['Float'];
  tags?: InputMaybe<Array<ObjectId>>;
  title: Scalars['String'];
};

export type NewCategoryInput = {
  name: Scalars['String'];
};

export type NewTagInput = {
  name: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  ads: Array<Ad>;
  categories: Array<Category>;
  getAdById: Ad;
  tags: Array<Tag>;
};


export type QueryAdsArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  tagsId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetAdByIdArgs = {
  adId: Scalars['Int'];
};


export type QueryTagsArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdateAdInput = {
  category?: InputMaybe<ObjectId>;
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Array<ObjectId>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTagInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type DeleteAdMutationVariables = Exact<{
  adId: Scalars['Float'];
}>;


export type DeleteAdMutation = { __typename?: 'Mutation', deleteAd: string };

export type GetAdByIdQueryVariables = Exact<{
  adId: Scalars['Int'];
}>;


export type GetAdByIdQuery = { __typename?: 'Query', getAdById: { __typename?: 'Ad', id: number, title: string, price: number, picture: string, location: string, owner: string, description: string, category: { __typename?: 'Category', id: number } } };


export const DeleteAdDocument = gql`
    mutation DeleteAd($adId: Float!) {
  deleteAd(adId: $adId)
}
    `;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, options);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const GetAdByIdDocument = gql`
    query GetAdById($adId: Int!) {
  getAdById(adId: $adId) {
    id
    title
    price
    picture
    location
    owner
    description
    category {
      id
    }
  }
}
    `;

/**
 * __useGetAdByIdQuery__
 *
 * To run a query within a React component, call `useGetAdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdByIdQuery({
 *   variables: {
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useGetAdByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
      }
export function useGetAdByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
        }
export type GetAdByIdQueryHookResult = ReturnType<typeof useGetAdByIdQuery>;
export type GetAdByIdLazyQueryHookResult = ReturnType<typeof useGetAdByIdLazyQuery>;
export type GetAdByIdQueryResult = Apollo.QueryResult<GetAdByIdQuery, GetAdByIdQueryVariables>;