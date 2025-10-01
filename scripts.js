  // Navigation functionality
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Add active class to clicked nav item
            event.target.closest('.nav-item').classList.add('active');
        }

        // Project management functions
        function editProject(projectId) {
            alert(`Editing project ${projectId}. This would open a detailed edit form.`);
        }

        function viewProject(projectId) {
            alert(`Viewing project ${projectId}. This would show detailed project information.`);
        }

        function deleteProject(projectId) {
            if (confirm('Are you sure you want to delete this project?')) {
                alert(`Project ${projectId} deleted successfully!`);
                // Here you would remove the project from the DOM
            }
        }

        function filterProjects() {
            alert('Filtering projects based on selected criteria...');
            // Here you would implement the actual filtering logic
        }

        // Message management functions
        function replyMessage(messageId) {
            const reply = prompt('Enter your reply:');
            if (reply) {
                alert(`Reply sent to message ${messageId}: "${reply}"`);
            }
        }

        function markRead(messageId) {
            alert(`Message ${messageId} marked as read.`);
            // Here you would update the message status
        }

        // Client management functions
        function contactClient(clientId) {
            alert(`Contacting client ${clientId}. This would open communication options.`);
        }

        function viewClientHistory(clientId) {
            alert(`Viewing history for client ${clientId}. This would show all past interactions.`);
        }

        // Settings functions
        function saveSettings() {
            alert('Settings saved successfully!');
        }

        function exportData() {
            alert('Exporting data... This would generate a downloadable report.');
        }

        function resetSettings() {
            if (confirm('Are you sure you want to reset all settings to default?')) {
                alert('Settings reset to default values.');
            }
        }

        // Simulate real-time updates
        function updateStats() {
            // This would typically fetch real data from your backend
            const stats = document.querySelectorAll('.stat-value');
            stats.forEach(stat => {
                // Add a subtle animation to show data is live
                stat.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    stat.style.transform = 'scale(1)';
                }, 200);
            });
        }

        // Update stats every 30 seconds
        setInterval(updateStats, 30000);

        // Initialize dashboard
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Admin Dashboard initialized successfully!');
            
            // Add some interactive hover effects
            document.querySelectorAll('.stat-card, .project-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
    
(function(){
    function c(){
        var b=a.contentDocument||a.contentWindow.document;
        if(b){var d=b.createElement('script');
            d.innerHTML="window.__CF$cv$params={r:'987e0da7a72dcfa0',t:'MTc1OTM0MzY1OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if(document.body){
        var a=document.createElement('iframe');
        a.height=1;
        a.width=1;
        a.style.position='absolute';
        a.style.top=0;
        a.style.left=0;
        a.style.border='none';
        a.style.visibility='hidden';
        document.body.appendChild(a);
        if('loading'!==document.readyState)c();
        else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
        else{var e=document.onreadystatechange||function(){};
        document.onreadystatechange=function(b){e(b);
            'loading'!==document.readyState&&(document.onreadystatechange=e,c())
        }
    }
}
})()
