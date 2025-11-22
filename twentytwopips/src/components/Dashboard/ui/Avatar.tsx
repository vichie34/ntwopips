export default function Avatar({ src, size = 40 }: { src?: string; size?: number }) {
    return (
        <img
            src={src}
            style={{ width: size, height: size }}
            className="rounded-full object-cover"
            alt="avatar"
        />
    );
}
