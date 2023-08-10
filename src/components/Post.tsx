import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: 'paragraph' | 'link' | 'tag';
	content: string;
}

export interface PostType {
	id: number;
	author: Author;
	content: Content[];
	publishedAt: Date;
}

interface PostProps {
	post: PostType;
}

export function Post({ post }: PostProps) {
	const [comments, setComments] = useState(["That's a nice post 👏"]);
	const [newCommentText, setNewCommentText] = useState('');

	const publishedDateFormatted = format(post.publishedAt, "LLLL dd',' yyyy 'at' hh:mmaaa", { locale: enUS });
	const publishedDateRelativetoNow = formatDistanceToNow(post.publishedAt, {
		locale: enUS,
		addSuffix: true,
	});

	const isNewCommentEmpty = newCommentText.length === 0;

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText('');
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Required');
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={post.author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{post.author.name}</strong>
						<span>{post.author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
					{publishedDateRelativetoNow}
				</time>
			</header>

			<div className={styles.content}>
				{post.content.map(line => {
					switch (line.type) {
						case 'paragraph':
							return <p key={line.content}>{line.content}</p>;
						case 'link':
							return (
								<p key={line.content}>
									<a href="#">{line.content}</a>
								</p>
							);
					}
				})}
				<ul className={styles.tags}>
					{post.content.map(line => {
						if (line.type === 'tag')
							return (
								<li key={line.content}>
									<a href="#">{line.content}</a>
								</li>
							);
					})}
				</ul>
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Leave your comment</strong>

				<textarea
					name="comment"
					placeholder="Write a comment"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Post
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map(comment => {
					return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />;
				})}
			</div>
		</article>
	);
}
