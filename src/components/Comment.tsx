import { HandsClapping, TrashSimple } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
	content: string;
	onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount(state => {
			return state + 1;
		});
	}

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg"
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Haley Monich</strong>
							<time title="August 1, 2023 at 10:49am" dateTime="2023-08-01 10:49:00">
								Posted 1 hour ago
							</time>
						</div>

						<button onClick={handleDeleteComment} title="Delete comment">
							<TrashSimple size={24} weight="bold" />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment} title="Apploud post">
						<HandsClapping size={20} weight="bold" /> Applaud <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
