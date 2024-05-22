import React from 'react';

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-4 mt-8">
            <div className="container mx-auto text-center">
                <p> Made by Maddox Nehls &#x2764;&#xFE0F; &copy;{new Date().getFullYear()}</p>
                <div className="mt-2">
                    <a href="https://www.linkedin.com/in/maddox-nehls/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-background">
                        LinkedIn
                    </a>
                    <a href="https://github.com/MaddoxNehls" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-background">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
